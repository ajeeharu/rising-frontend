import { ShieldCheck, Mail, Clock, MapPin, Building, User, Info } from 'lucide-react';

export const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#fcfcfd] py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* ヘッダーエリア */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-blue-50 text-blue-600 rounded-2xl mb-6">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            プライバシーポリシー
          </h1>
          <div className="flex items-center justify-center gap-2 text-gray-400 font-medium">
            <Clock className="w-4 h-4" />
            <p>最終更新日: 2026年4月11日</p>
          </div>
        </div>

        {/* メインコンテンツ */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-8 md:p-16">
            <div className="prose prose-blue max-w-none text-gray-600 leading-relaxed">
              <p className="text-lg text-gray-800 leading-loose mb-12 border-l-4 border-blue-500 pl-6 py-2 bg-blue-50/30 rounded-r-lg">
                Rising卓球教室は，本ウェブサイト上で提供するサービス（以下,「本サービス」といいます。）における，ユーザーの個人情報の取扱いについて，以下のとおりプライバシーポリシーを定めます。
              </p>

              {/* 第1条・第2条 */}
              {[
                { title: "第1条（個人情報）", content: "「個人情報」とは，個人情報保護法にいう「個人情報」を指すものとし，生存する個人に関する情報であって，当該情報に含まれる氏名，生年月日，住所，電話番号，連絡先その他の記述等により特定の個人を識別できる情報及び容貌，指紋，声紋にかかるデータ，及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。" },
                { title: "第2条（個人情報の収集方法）", content: "Rising卓球教室は，ユーザーが利用登録をする際に氏名，生年月日，住所，電話番号，メールアドレス，銀行口座番号，クレジットカード番号，運転免許証番号などの個人情報をお尋ねすることがあります。また，ユーザーと提携先などとの間でなされたユーザーの個人情報を含む取引記録や決済に関する情報を,Rising卓球教室の提携先などから収集することがあります。" },
              ].map((section, idx) => (
                <section key={idx} className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3 mb-6">
                    <span className="text-blue-600/30 text-3xl italic">0{idx + 1}</span>
                    {section.title}
                  </h2>
                  <p className="bg-gray-50/50 p-6 rounded-2xl border border-gray-50">{section.content}</p>
                </section>
              ))}

              {/* 第3条 */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3 mb-6">
                  <span className="text-blue-600/30 text-3xl italic">03</span>
                  第3条（個人情報を収集・利用する目的）
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "サービスの提供・運営のため", "お問い合わせへの回答", "新機能・更新情報の通知", "重要なお知らせのご連絡",
                    "不正利用ユーザーの特定・拒否", "登録情報の閲覧・変更・削除", "利用料金の請求（有料時）", "上記目的に付随する目的"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:border-blue-200 transition-colors">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      <span className="text-sm font-medium text-gray-700">{text}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* 第4条（利用目的の変更） */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3 mb-6">
                  <span className="text-blue-600/30 text-3xl italic">04</span>
                  第4条（利用目的の変更）
                </h2>
                <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
                   <ul className="space-y-3 list-none p-0">
                     <li className="flex gap-3 text-sm"><span className="text-blue-600 font-bold">1.</span> 利用目的が変更前と関連性を有すると合理的に認められる場合に限り，個人情報の利用目的を変更するものとします。</li>
                     <li className="flex gap-3 text-sm"><span className="text-blue-600 font-bold">2.</span> 変更を行った場合には，所定の方法によりユーザーに通知，または本ウェブサイト上に公表するものとします。</li>
                   </ul>
                </div>
              </section>

              {/* 第5条（第三者提供） */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3 mb-6">
                  <span className="text-blue-600/30 text-3xl italic">05</span>
                  第5条（個人情報の第三者提供）
                </h2>
                <div className="space-y-4">
                  <div className="p-6 bg-white border border-gray-200 rounded-2xl">
                    <p className="text-sm font-bold mb-4 flex items-center gap-2 text-gray-800">
                      <Info className="w-4 h-4 text-blue-500" /> 次の場合を除いて，あらかじめ同意を得ることなく第三者に提供することはありません。
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-gray-600 list-none p-0">
                      <li className="p-3 bg-gray-50 rounded-lg">・人の生命，身体または財産の保護のために必要な場合</li>
                      <li className="p-3 bg-gray-50 rounded-lg">・公衆衛生の向上または児童の健全な育成に必要な場合</li>
                      <li className="p-3 bg-gray-50 rounded-lg">・国の機関や地方公共団体等の事務遂行に協力する場合</li>
                      <li className="p-3 bg-gray-50 rounded-lg">・その他法令で認められる場合</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 第6条〜第9条（一括表示） */}
              {[
                { title: "第6条（個人情報の開示）", content: "本人から開示を求められたときは，遅滞なくこれを開示します。ただし，開示することにより本人または第三者の権利利益を害する場合等には，その全部または一部を開示しないことがあります。なお，開示に際しては1件あたり1,000円の手数料を申し受けます。" },
                { title: "第7条（個人情報の訂正および削除）", content: "ユーザーは，Rising卓球教室の保有する自己の個人情報が誤った情報である場合には，所定の手続きにより訂正，追加または削除を請求することができます。" },
                { title: "第8条（個人情報の利用停止等）", content: "利用目的の範囲を超えて取り扱われているという理由，または不正の手段により取得されたものであるという理由により，その利用の停止または消去を求めることができます。" },
                { title: "第9条（プライバシーポリシーの変更）", content: "本ポリシーの内容は，法令その他別段の定めのある事項を除いて，ユーザーに通知することなく変更することができるものとします。変更後のポリシーは，ウェブサイトに掲載したときから効力を生じるものとします。" },
              ].map((section, idx) => (
                <section key={idx + 5} className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3 mb-6">
                    <span className="text-blue-600/30 text-3xl italic">0{idx + 6}</span>
                    {section.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed pl-4 border-l-2 border-gray-100">{section.content}</p>
                </section>
              ))}

              {/* お問い合わせ窓口 */}
              <section className="mt-20 pt-12 border-t border-gray-100">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-blue-600 text-white rounded-lg"><Mail size={20}/></div>
                  <h2 className="text-2xl font-bold text-gray-900">第10条（お問い合わせ窓口）</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <ContactItem icon={<MapPin size={18}/>} label="住所" value="福井県福井市新田塚２丁目45-22" />
                  <ContactItem icon={<Building size={18}/>} label="社名" value="Rising卓球教室" />
                  <ContactItem icon={<User size={18}/>} label="代表" value="奥山 裕治" />
                  <ContactItem icon={<Mail size={18}/>} label="Eメール" value="otoiawase@rising-table-tennis.website" />
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactItem = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) => (
  <div className="flex items-center gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-sm transition-all group">
    <div className="text-blue-600 group-hover:scale-110 transition-transform">{icon}</div>
    <div>
      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter mb-0.5">{label}</p>
      <p className="text-sm font-bold text-gray-800">{value}</p>
    </div>
  </div>
);
