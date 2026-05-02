
export const EditProfile = () => {
  return (
    <div className="edit-profile-container">
      <div className="edit-profile-header">
        <h1 className="edit-profile-title">プロフィール編集</h1>
        <p className="edit-profile-subtitle">
          ユーザー名を編集できます
        </p>
      </div>


      <div className="edit-profile-section">
        <h2 className="section-title">
          ユーザー名 <span className="required">*</span>
        </h2>
        <input
          type="text"
          className="username-input"
          placeholder="ユーザー名を入力してください"
        />
      </div>

      <div className="edit-profile-actions">
        <button className="save-button">変更を保存</button>
        <button className="cancel-button">キャンセル</button>
      </div>
    </div >
  );
}

