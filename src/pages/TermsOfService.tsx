import { Scale, Clock, UserCheck, Key, HelpCircle, FileText, Mail, MapPin, Building, User } from 'lucide-react';

export const TermsOfService = () => {
    return (
        <div className="min-h-screen bg-[#fcfcfd] py-20 px-4">
            <div className="max-w-4xl mx-auto">
                {/* ヘッダーエリア */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center p-3 bg-blue-50 text-blue-600 rounded-2xl mb-6">
                        <Scale className="w-8 h-8" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
                        利用規約
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
                                この利用規約（以下、「本規約」といいます。）は、Rising卓球教室（以下、「当教室」といいます。）が本ウェブサイト上で提供するサービス（以下、「本サービス」といいます。）の利用条件を定めるものです。ユーザーの皆さまには、本規約に従って本サービスをご利用いただきます。
                            </p>

                            {/* 第1条・第2条 */}
                            {[
                                {
                                    title: "第1条（適用）",
                                    icon: <FileText className="w-5 h-5" />,
                                    content: "本規約は、ユーザーと当教室との間の本サービスの利用に関わる一切の関係に適用されるものとします。"
                                },
                                {
                                    title: "第2条（利用登録）",
                                    icon: <UserCheck className="w-5 h-5" />,
                                    content: "本サービスにおいては、登録希望者が本規約に同意の上、当教室の定める方法によって利用登録を申請し、当教室がこれを承認することによって、利用登録が完了するものとします。"
                                },
                                {
                                    title: "第3条（ユーザーIDおよびパスワードの管理）",
                                    icon: <Key className="w-5 h-5" />,
                                    content: "ユーザーは、自己の責任において、本サービスのユーザーIDおよびパスワードを適切に管理するものとします。"
                                },
                            ].map((section, idx) => (
                                <section key={idx} className="mb-12">
                                    <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3 mb-6">
                                        <span className="text-blue-600/30 text-3xl italic">0{idx + 1}</span>
                                        {section.title}
                                    </h2>
                                    <div className="flex gap-4 p-6 bg-gray-50/50 rounded-2xl border border-gray-100">
                                        <div className="text-blue-500 mt-1">{section.icon}</div>
                                        <p className="text-gray-700 m-0">{section.content}</p>
                                    </div>
                                </section>
                            ))}

                            {/* 第4条（利用目的の変更） */}
                            <section className="mb-12">
                                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3 mb-6">
                                    <span className="text-blue-600/30 text-3xl italic">04</span>
                                    第4条（利用目的の変更）
                                </h2>
                                <div className="bg-blue-50/30 p-6 rounded-2xl border border-blue-100">
                                    <ul className="space-y-4 list-none p-0">
                                        <li className="flex gap-3 text-sm font-medium text-gray-700">
                                            <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-[10px]">1</span>
                                            利用目的が変更前と関連性を有すると合理的に認められる場合に限り，個人情報の利用目的を変更するものとします。
                                        </li>
                                        <li className="flex gap-3 text-sm font-medium text-gray-700">
                                            <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-[10px]">2</span>
                                            利用目的の変更を行った場合には，変更後の目的について，当教室所定の方法によりユーザーに通知，または本ウェブサイト上に公表するものとします。
                                        </li>
                                    </ul>
                                </div>
                            </section>

                            {/* 第5条（第三者提供） */}
                            <section className="mb-12">
                                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3 mb-6">
                                    <span className="text-blue-600/30 text-3xl italic">05</span>
                                    第5条（個人情報の第三者提供）
                                </h2>
                                <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
                                    <p className="text-sm text-gray-500 mb-6 border-b pb-4 leading-relaxed">
                                        当教室は、次に掲げる場合を除いて、あらかじめ同意を得ることなく第三者に個人情報を提供することはありません。
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                                        {[
                                            "人の生命，身体または財産の保護のために必要な場合",
                                            "公衆衛生の向上または児童の健全な育成に必要な場合",
                                            "国の機関や地方公共団体等の事務遂行に協力する場合",
                                            "利用目的に第三者提供を含み、あらかじめ告知・届出をしたとき"
                                        ].map((text, i) => (
                                            <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                                                <div className="w-1 h-full bg-blue-400 rounded-full" />
                                                <span className="text-gray-700">{text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* 第6条〜第9条 */}
                            {[
                                { title: "第6条（個人情報の開示）", content: "本人から開示を求められたときは，遅滞なくこれを開示します。ただし，業務の適正な実施に支障を及ぼす場合等には，一部または全部を開示しないことがあります。" },
                                { title: "第7条（個人情報の訂正および削除）", content: "ユーザーは、保有する自己の個人情報が誤った情報である場合には、所定の手続きにより訂正、追加または削除を請求することができます。" },
                                { title: "第8条（個人情報の利用停止等）", content: "個人情報が盗用されたものであるという理由等により，その利用の停止または消去を求められた場合には，遅滞なく必要な調査を行い対応します。" },
                                { title: "第9条（プライバシーポリシーの変更）", content: "本ポリシーの内容は，ユーザーに通知することなく変更することができるものとします。変更後のポリシーは，ウェブサイトに掲載したときから効力を生じるものとします。" },
                            ].map((section, idx) => (
                                <section key={idx + 6} className="mb-12">
                                    <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3 mb-6">
                                        <span className="text-blue-600/30 text-3xl italic">0{idx + 6}</span>
                                        {section.title}
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed pl-6 border-l-2 border-gray-100">{section.content}</p>
                                </section>
                            ))}

                            {/* 第10条：お問い合わせ窓口 */}
                            <section className="mt-20 pt-12 border-t border-gray-100">
                                <div className="flex items-center gap-3 mb-8 text-blue-600">
                                    <HelpCircle size={24} />
                                    <h2 className="text-2xl font-bold text-gray-900">第10条（お問い合わせ窓口）</h2>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <ContactItem icon={<MapPin size={18} />} label="所在地" value="福井県福井市新田塚２丁目45-22" />
                                    <ContactItem icon={<Building size={18} />} label="名称" value="Rising卓球教室" />
                                    <ContactItem icon={<User size={18} />} label="代表" value="奥山 裕治" />
                                    <ContactItem icon={<Mail size={18} />} label="Eメール" value="jichikaishien01@gmail.com" />
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
