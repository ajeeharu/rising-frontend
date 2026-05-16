import axios from 'axios';
import { api } from "../axiosInstance";
import type { S3UpLoadRequestType, S3UpLoadResponseType } from "../types/VideoType";

const getPresignedUrl = async (params: S3UpLoadRequestType): Promise<S3UpLoadResponseType> => {
    // axios.post<戻り値の型>(URL, 送信データ)
    const { data } = await api.post<S3UpLoadResponseType>('get-presigned-url', params);

    return data; // data は S3UpLoadResponseType 型として扱われる
};

export const uploadVideo = async (file: File, onProgress?: (percent: number) => void) => {
    try {
        // 1. Laravel API から署名付きURLを取得
        const  data  = getPresignedUrl({
            file_name: file.name,
            file_type: file.type,
        });

        // APIレスポンスから URL を抽出
        const presignedUrl = (await data).s3_presigned.url; // data.url オブジェクトの中の url プロパティ
        const videoPath = (await data).path;      // S3内の保存パス
        // 2. S3 へ PUT リクエストで直接アップロード
        // 注意: Laravel の temporaryUploadUrl は PUT メソッドを想定しています
        await axios.put(presignedUrl, file, {
            headers: {
                'Content-Type': file.type,
            },
            onUploadProgress: (progressEvent) => {
                const percent = Math.round((progressEvent.loaded * 100) / (progressEvent.total || 100));
                if (onProgress) {
                    onProgress(percent);
                }
            },
        });

        // 3. 必要に応じて、保存完了したパスを再度 Laravel に送って DB 保存
        // await axios.post('/api/save-video-path', { path: path });
        return videoPath; // アップロードされたファイルのパスを返す
    } catch (error) {
        console.error('Upload Error:', error);
        throw error; // エラーを呼び出し元に再スロー
    }
};
