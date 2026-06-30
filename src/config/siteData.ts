export const siteData = {
  websiteName: "土音窯",
  romanizedName: "Tsuchine Gama",
  tagline: "土の声を、暮らしの器へ。",
  description: "土音窯は、日々の食卓に寄り添う器づくり、手仕事の工程、陶芸体験を紹介する架空の陶芸工房サイトです。",
  atelierName: "土音窯 陶芸工房",
  address: "京都府京都市東山区清水2-218 土音窯アトリエ",
  email: "hello@tsuchine-gama.jp",
  businessHours: "10:00〜17:00 / 水曜休み",
  instagram: "https://instagram.com/tsuchine.gama",
  
  // Navigation Links
  navLinks: [
    { label: "私たちについて", path: "/about" },
    { label: "作品", path: "/works" },
    { label: "陶芸体験", path: "/workshop" },
    { label: "制作工程", path: "/process" },
    { label: "お問い合わせ", path: "/contact" }
  ],
  footerLinks: [
    { label: "ホーム", path: "/" },
    { label: "私たちについて", path: "/about" },
    { label: "作品", path: "/works" },
    { label: "陶芸体験", path: "/workshop" },
    { label: "制作工程", path: "/process" },
    { label: "お問い合わせ", path: "/contact" },
    { label: "プライバシーポリシー", path: "/privacy-policy" },
    { label: "利用規約", path: "/terms" }
  ],
  
  // Ceramic Works Data
  works: [
    { id: 1, name: "朝霧の飯碗", category: "飯碗", clayType: "白土", glazeType: "透明釉", firingMethod: "酸化焼成", usageScene: "毎日の朝食に", description: "朝の光を思わせる、静かでやさしい白。手にすっと馴染む形です。", careNote: "電子レンジ・食洗機はお控えください。" },
    { id: 2, name: "灰釉の湯呑み", category: "湯呑み", clayType: "半磁器土", glazeType: "灰釉", firingMethod: "還元焼成", usageScene: "ほっと一息つくお茶の時間に", description: "自然の灰が作り出す、深みのある緑と茶のグラデーション。", careNote: "使い込むほどに景色が変わります。" },
    { id: 3, name: "黒土の小皿", category: "小皿", clayType: "黒土", glazeType: "焼き締め", firingMethod: "還元焼成", usageScene: "お茶請けや副菜の盛り付けに", description: "土本来の力強さとざらりとした質感が魅力の小皿。", careNote: "水気のあるものは早めに洗い流してください。" },
    { id: 4, name: "粉引の花器", category: "花器", clayType: "赤土", glazeType: "粉引", firingMethod: "酸化焼成", usageScene: "野の花を飾る", description: "ぽってりとした白い化粧土から、下地の赤土がほんのり透ける素朴な花器。", careNote: "水漏れ防止処理を施していますが、敷物を敷いてご使用ください。" },
    { id: 5, name: "焼締めの酒器", category: "酒器", clayType: "ブレンド土", glazeType: "なし（焼き締め）", firingMethod: "薪窯焼成", usageScene: "晩酌の時間に", description: "炎が直接触れることで生まれる、唯一無二の景色「緋襷（ひだすき）」。", careNote: "お酒の香りを引き立てます。使用後はよく乾燥させてください。" },
    { id: 6, name: "藁灰釉の大皿", category: "大皿", clayType: "信楽土", glazeType: "藁灰釉", firingMethod: "還元焼成", usageScene: "人が集まる食卓の主役に", description: "藁灰が溶け合って生まれる、ふんわりとした白濁が美しい大皿。", careNote: "油染みがつきやすいため、使用前に水にくぐらせることをおすすめします。" }
  ],
  
  // Workshop Data
  workshops: [
    { id: 1, name: "はじめての手びねり体験", duration: "約2時間", difficulty: "やさしい（初心者歓迎）", audience: "大人から子供まで", whatVisitorsMake: "お茶碗や小鉢を1〜2点", whatToBring: "エプロン、汚れてもいい服装", safetyNote: "陶芸体験では道具、粘土、釉薬、窯などを扱う場合があります。実際の体験では工房スタッフの案内に従い、安全にご参加ください。", inquiryCta: "体験を予約相談" },
    { id: 2, name: "ろくろ体験", duration: "約2時間半", difficulty: "すこし挑戦（中学生以上）", audience: "土の感触をじっくり味わいたい方", whatVisitorsMake: "湯呑みや飯碗を2〜3点", whatToBring: "エプロン、タオル、髪をまとめるゴム（長い場合）", safetyNote: "陶芸体験では道具、粘土、釉薬、窯などを扱う場合があります。実際の体験では工房スタッフの案内に従い、安全にご参加ください。", inquiryCta: "体験を予約相談" },
    { id: 3, name: "親子でつくる小皿", duration: "約1時間半", difficulty: "とてもやさしい", audience: "親子（小学生以下のお子様と保護者）", whatVisitorsMake: "スタンプや型抜きを使った小皿2点", whatToBring: "エプロン、汚れてもいい服装", safetyNote: "陶芸体験では道具、粘土、釉薬、窯などを扱う場合があります。実際の体験では工房スタッフの案内に従い、安全にご参加ください。", inquiryCta: "体験を予約相談" },
    { id: 4, name: "釉薬を選ぶ器づくり", duration: "約2時間", difficulty: "やさしい（初心者歓迎）", audience: "色合いにこだわりたい方", whatVisitorsMake: "手びねりで器を作り、3種類の釉薬から指定", whatToBring: "エプロン", safetyNote: "陶芸体験では道具、粘土、釉薬、窯などを扱う場合があります。実際の体験では工房スタッフの案内に従い、安全にご参加ください。", inquiryCta: "体験を予約相談" },
    { id: 5, name: "静かな午前の陶芸時間", duration: "約3時間", difficulty: "じっくり（経験者も歓迎）", audience: "静かに土と向き合いたい方", whatVisitorsMake: "自由制作（大皿や花器なども可）", whatToBring: "エプロン、タオル、作りたいもののイメージ", safetyNote: "陶芸体験では道具、粘土、釉薬、窯などを扱う場合があります。実際の体験では工房スタッフの案内に従い、安全にご参加ください。", inquiryCta: "体験を予約相談" }
  ],
  
  // Process Steps
  processSteps: [
    { step: 1, title: "土を選ぶ", description: "作る器の用途や表現したい質感に合わせて、様々な種類の粘土をブレンドし、土の個性を引き出します。", craftNote: "土の性質が作品の骨格を決める第一歩。", timeRequired: "半日", beginnerInsight: "粘土の色は焼くと全く違う色に変わります。" },
    { step: 2, title: "土を練る", description: "土の中の空気を抜き、硬さを均一にするため「菊練り」という技法で土を練り上げます。", craftNote: "土の機嫌を伺うように、リズムよく練る。", timeRequired: "1〜2時間", beginnerInsight: "プロの菊練りは、まるで菊の花びらのように美しいです。" },
    { step: 3, title: "かたちを作る", description: "ろくろや手びねり、型打ちなどの技法を用いて、土に形を与えます。焼成時の収縮を計算に入れます。", craftNote: "土の声を聴き、無理のない形へ導く。", timeRequired: "1日", beginnerInsight: "手びねりなら、指の跡がそのまま作品の景色になります。" },
    { step: 4, title: "乾かす", description: "直射日光を避け、風通しの良い日陰でゆっくりと時間をかけて乾燥させます。", craftNote: "急激な乾燥はひび割れの原因になる。", timeRequired: "数日〜1週間", beginnerInsight: "乾燥すると土は少し白っぽく、軽くなります。" },
    { step: 5, title: "素焼き", description: "約800度の低温で一度焼きます。これにより土が締まり、釉薬を掛けやすくなります。", craftNote: "土が「素地」へと変わる瞬間。", timeRequired: "約10時間（冷却込みで2日）", beginnerInsight: "素焼きされた器は、植木鉢のような素朴な質感です。" },
    { step: 6, title: "釉薬をかける", description: "灰や長石などの天然原料を調合した釉薬（うわぐすり）を掛けます。これがガラス質のコーティングになります。", craftNote: "釉薬の厚みで焼き上がりの色が大きく変わる。", timeRequired: "1日", beginnerInsight: "釉薬を掛けた直後は、まだ本来の色は見えません。" },
    { step: 7, title: "本焼き", description: "1200度以上の高温の窯で、丸一日かけて焼き上げます。炎と土、釉薬が溶け合う一番重要な工程です。", craftNote: "人事を尽くし、最後は炎に委ねる。", timeRequired: "20〜30時間（冷却込みで数日）", beginnerInsight: "窯から出すまで、本当の仕上がりは誰にも分かりません。" },
    { step: 8, title: "仕上げ", description: "窯出し後、高台（底の部分）をやすりで滑らかに磨き、水漏れがないか確認して完成です。", craftNote: "日々の暮らしで心地よく使えるように。", timeRequired: "半日", beginnerInsight: "器は使い込むことで、さらに育っていきます。" }
  ],
  
  // Privacy Policy
  privacyPolicy: {
    sections: [
      { title: "個人情報の取得について", content: "当工房は、お問い合わせや陶芸体験の相談をいただく際に、氏名、メールアドレス等の個人情報を取得する場合があります。なお、本サイトは架空のポートフォリオサイトであり、実際の個人情報の収集や決済等は行っておりません。" },
      { title: "利用目的", content: "取得した個人情報は、お問い合わせに対する回答や必要なご連絡のためにのみ利用し、それ以外の目的では利用いたしません。" },
      { title: "お問い合わせ情報の管理", content: "お預かりした情報は、適切なセキュリティ対策のもとで管理し、紛失や漏洩の防止に努めます。" },
      { title: "Cookieの利用について", content: "本サイトでは、利用状況の把握や操作性の向上のため、Cookieを使用する場合があります。利用者はブラウザの設定によりCookieを拒否することも可能です。" },
      { title: "アクセス解析について", content: "サイトの改善を目的に、個人を特定できない形でアクセスログを収集・解析する場合があります。" },
      { title: "第三者提供について", content: "法令に基づく場合を除き、利用者の同意を得ることなく個人情報を第三者に提供することはありません。" },
      { title: "安全管理", content: "個人情報の漏洩、滅失、き損の防止その他の安全管理のために必要かつ適切な措置を講じます。" },
      { title: "免責事項", content: "本プライバシーポリシーは、架空のサイトにおける記載例です。本サイトの利用により生じたトラブルや損害について、当工房は一切の責任を負いません。" },
      { title: "お問い合わせ窓口", content: "個人情報の取り扱いに関するお問い合わせは、hello@tsuchine-gama.jp（架空のアドレス）までお願いいたします。" },
      { title: "改定について", content: "本ポリシーは、必要に応じて予告なく改定される場合があります。" }
    ]
  },
  
  // Terms and Conditions
  terms: {
    sections: [
      { title: "サービスの利用条件", content: "本利用規約は、架空の陶芸工房「土音窯（Tsuchine Gama）」ウェブサイト（以下「本サイト」）の利用条件を定めるものです。本サイトの閲覧・利用をもって、本規約に同意したものとみなします。" },
      { title: "掲載情報について", content: "本サイトに掲載されている工房情報、作品、陶芸体験の内容、料金、営業時間等はすべて架空のものであり、実際のサービスや商品を提供するものではありません。" },
      { title: "作品情報について", content: "掲載されている作品の画像や説明は、ポートフォリオとしてのデザインサンプルです。実際の購入や注文はできません。" },
      { title: "陶芸体験について", content: "陶芸体験の案内や予約ボタンはデザイン上の表現であり、実際に予約が成立することはありません。" },
      { title: "安全上の注意", content: "本サイトでは陶芸体験に関する一般的な安全上の注意（粘土や釉薬の取り扱いなど）を記載していますが、これは実際の体験を想定したものではありません。実際の陶芸活動においては、指導者の指示に従ってください。" },
      { title: "禁止事項", content: "本サイトのコンテンツ、画像、デザイン等の無断転載、複製、改変、再配布等の行為を固く禁じます。" },
      { title: "免責事項", content: "本サイトの利用によって生じたいかなる損害についても、運営者は一切の責任を負いません。" },
      { title: "知的財産権", content: "本サイトに関する知的財産権は、すべて運営者または正当な権利者に帰属します。" },
      { title: "外部リンクについて", content: "本サイトからリンクされている外部サイトの内容について、運営者は責任を負いません。" },
      { title: "コンテンツ変更について", content: "本サイトの内容は、予告なく変更、追加、削除される場合があります。" },
      { title: "準拠法", content: "本規約の解釈にあたっては、日本法を準拠法とします。" },
      { title: "お問い合わせ", content: "本規約に関するお問い合わせは、contactフォーム（架空）をご利用ください。" }
    ]
  },
  
  // Disclaimers and Notices
  craftDisclaimer: "掲載している作品、体験内容、営業時間、料金、開催情報は架空または編集上の情報を含みます。実際の参加や購入を検討する際は、各工房・公式情報をご確認ください。",
  safetyNotice: "陶芸体験では道具、粘土、釉薬、窯などを扱う場合があります。実際の体験では工房スタッフの案内に従い、安全にご参加ください。"
};
