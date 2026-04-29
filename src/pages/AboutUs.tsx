import { Mail, MapPin, User, Users, Home, ExternalLink, Navigation } from 'lucide-react';

export const AboutUs = () => {
  // 拠点の住所
  const practiceLocation = "福井県福井市栗森２丁目３０１７";

  // Google Maps 検索・ルート検索用のURL
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(practiceLocation)}`;
  const routeUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(practiceLocation)}`;

  const profileData = [
    { label: '代表者', value: '奥山 裕治', icon: <User className="w-5 h-5" />, desc: 'Rising卓球教室 代表' },
    { label: '所在地', value: '福井県福井市新田塚２丁目45-22', icon: <MapPin className="w-5 h-5" />, desc: '事務局' },
    { label: '所属指導者', value: '7名', icon: <Users className="w-5 h-5" />, desc: '専門スタッフ' },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] py-16 px-4 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* ヘッダー */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">会社概要</h1>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 左側：基本情報カード */}
          <div className="lg:col-span-1 space-y-4">
            {profileData.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">{item.icon}</div>
                  <dt className="text-xl font-bold text-gray-400 uppercase tracking-widest">{item.label}</dt>
                </div>
                <dd className="text-lg font-bold text-gray-800">{item.value}</dd>
                <p className="text-xl text-gray-400 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* 右側：練習拠点 ＆ Google Map 埋め込み */}
          <div className="lg:col-span-2">
            <div className="bg-white p-2 rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
              {/* 地図埋め込み (iframe) */}
              <div className="relative w-full h-[350px] rounded-2xl overflow-hidden bg-gray-100">
                <iframe
                  title="九頭竜TSC 周辺地図"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4326.703479049125!2d136.23989217580734!3d36.1179694724494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff89549cfd5781b%3A0x383ed793e25ae827!2z44CSOTEwLTAxMzcg56aP5LqV55yM56aP5LqV5biC5qCX5qOu77yS5LiB55uu77yT77yQ77yR77yX!5e1!3m2!1sja!2sjp!4v1777462736448!5m2!1sja!2sjp"
                  allowFullScreen
                ></iframe>
                {/* 注意: APIキーがない場合は、Googleマップで「共有」→「地図を埋め込む」
                  から取得できる <iframe> タグの src 内容をここに貼り付けてください。
                */}
              </div>

              {/* 地図下の拠点情報 ＆ ボタン */}
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-blue-600 mb-1">
                      <Home className="w-4 h-4" />
                      <span className="text-xl font-bold uppercase tracking-wider">練習拠点</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">九頭竜TSC</h3>
                    <p className="text-sm text-gray-500">{practiceLocation}</p>
                  </div>

                  <div className="flex gap-2">
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      地図で見る
                    </a>
                    <a
                      href={routeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-xl text-sm font-bold text-white hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all"
                    >
                      <Navigation className="w-4 h-4" />
                      ルート案内
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* お問い合わせ（先ほどのデザインを維持） */}
        <div className="mt-8">
          <a href="mailto:jichikaishien01@gmail.com" className="flex items-center gap-4 bg-secondary text-white p-6 rounded-2xl hover:bg-blue-600 transition-all group">
            <Mail className="w-5 h-5 text-blue-400" />
            <span className="font-bold">jichikaishien01@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  );
};
