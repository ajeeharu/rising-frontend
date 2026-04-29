import React from 'react';
import { Mail, MapPin, User, Users, Home } from 'lucide-react';

export const AboutUs: React.FC = () => {
  const profileData = [
    {
      label: '代表',
      value: '奥山 裕治',
      icon: <User className="w-5 h-5 text-blue-600" />,
    },
    {
      label: '所在地',
      value: '福井県福井市新田塚２丁目45-22',
      icon: <MapPin className="w-5 h-5 text-blue-600" />,
    },
    {
      label: '練習拠点',
      value: '九頭竜TSC（福井県福井市栗森２丁目３０１７）',
      icon: <Home className="w-5 h-5 text-blue-600" />,
    },
    {
      label: '所属指導者数',
      value: '7名',
      icon: <Users className="w-5 h-5 text-blue-600" />,
    },
    {
      label: 'お問い合わせ',
      value: 'jichikaishien01@gmail.com',
      icon: <Mail className="w-5 h-5 text-blue-600" />,
      isLink: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-sm rounded-xl overflow-hidden border border-gray-100">
          {/* ヘッダー部分 */}
          <div className="bg-blue-600 px-6 py-8 text-white">
            <h1 className="text-3xl font-bold">会社概要</h1>
            <p className="mt-2 text-blue-100 opacity-90">Company Profile</p>
          </div>

          {/* コンテンツ部分 */}
          <div className="p-0">
            <dl>
              {profileData.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col sm:flex-row sm:items-center px-6 py-5 ${
                    index !== profileData.length - 1 ? 'border-bottom border-gray-100 border-b' : ''
                  } hover:bg-gray-50 transition-colors duration-200`}
                >
                  <dt className="flex items-center text-sm font-semibold text-gray-500 sm:w-1/3 mb-1 sm:mb-0">
                    <span className="mr-3">{item.icon}</span>
                    {item.label}
                  </dt>
                  <dd className="text-lg text-gray-900 sm:w-2/3 sm:pl-4 font-medium">
                    {item.isLink ? (
                      <a
                        href={`mailto:${item.value}`}
                        className="text-blue-600 hover:underline break-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* 補足：Googleマップ等へのリンクボタン（任意） */}
        <div className="mt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Rising Table Tennis Class
        </div>
      </div>
    </div>
  );
};
