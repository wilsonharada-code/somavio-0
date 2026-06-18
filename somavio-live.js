/* SomaVio — clean EN/JA language layer + index interactions
   Scope: index.html
   Generated clean version: English + Japanese only.
*/
(() => {
  'use strict';

  const DEFAULT_LANG = 'en';
  const SUPPORTED_LANGUAGES = ['en', 'ja'];
  const LANGUAGE_LABELS = {
    en: 'EN',
    ja: 'JA'
  };

  const TRANSLATIONS = {
  "en": {
    "hero_label": "Local Guide · Alberta",
    "hero_title": "Welcome to the<br><em>Canadian Rockies</em>",
    "hero_sub": "Local guidance for Canmore, Kananaskis & beyond.",
    "hero_cta": "Explore Canmore →",
    "hero_seal": "TOWN OF CANMORE · Alberta, Canada",
    "alert_label": "⚠ Wildlife Alert",
    "alert_text": "Grizzly activity reported near Grassi Lakes Trail. Check before heading out.",
    "alert_source": "Source: Parks Canada",
    "alert_btn": "What to do →",
    "featured_title": "What's good today",
    "featured_link": "See all recommendations →",
    "cat_title": "Explore by category",
    "cat_link": "View all →",
    "cat_outdoor": "Outdoor Adventures",
    "cat_outdoor_sub": "Trails, lakes & guided hikes",
    "cat_dining": "Dining & Local Flavour",
    "cat_dining_sub": "Restaurants, cafés & breweries",
    "cat_stay": "Places to Stay",
    "cat_stay_sub": "Hotels, lodges & retreats",
    "cat_wellness": "Wellness & Recovery",
    "cat_wellness_sub": "Spas, sauna & relaxation",
    "cat_arts": "Arts & Culture",
    "cat_arts_sub": "Museums, galleries & events",
    "cat_family": "Family Friendly",
    "cat_family_sub": "Activities for all ages",
    "tab_today": "Today",
    "tab_week": "This Week",
    "today_link": "View full calendar →",
    "how_headline": "Before, during and after — we're here.",
    "how_sub": "SomaVio supports your whole journey, from first idea to final memory.",
    "how1_title": "Plan smarter, not harder",
    "how1_text": "Save ideas and get context before you arrive.",
    "how2_title": "Everything you need, right now",
    "how2_text": "Weather, safety, offers and local picks — in one place.",
    "how3_title": "After your day — we're still here.",
    "how3_text": "Your saved spots and trip recap, always accessible.",
    "timeline1_label": "Before your stay",
    "timeline2_label": "During your stay",
    "timeline3_label": "After your stay",
    "b2b_text": "Are you a hotel or local business?",
    "b2b_link": "→ Partner with SomaVio",
    "cta_headline": "Your Alberta experience starts here.",
    "cta_btn": "Explore Canmore →"
  },
  "ja": {
    "hero_label": "ローカルガイド · アルバータ",
    "hero_title": "カナディアンロッキーへ<br><em>ようこそ</em>",
    "hero_sub": "キャンモア、カナナスキスとその周辺のローカルガイド。",
    "hero_cta": "キャンモアを探索 →",
    "hero_seal": "キャンモア市 · アルバータ州、カナダ",
    "alert_label": "⚠ 野生動物警報",
    "alert_text": "グラッシーレイクストレイル付近でグリズリーの目撃情報があります。出発前に確認してください。",
    "alert_source": "情報源：パークスカナダ",
    "alert_btn": "対処法を見る →",
    "featured_title": "今日のおすすめ",
    "featured_link": "すべての推薦を見る →",
    "cat_title": "カテゴリ別に探す",
    "cat_link": "すべて見る →",
    "cat_outdoor": "アウトドアアドベンチャー",
    "cat_outdoor_sub": "トレイル、湖、ガイドハイキング",
    "cat_dining": "ダイニング＆地元グルメ",
    "cat_dining_sub": "レストラン、カフェ、醸造所",
    "cat_stay": "宿泊施設",
    "cat_stay_sub": "ホテル、ロッジ、リトリート",
    "cat_wellness": "ウェルネス＆リカバリー",
    "cat_wellness_sub": "スパ、サウナ、リラクゼーション",
    "cat_arts": "アート＆文化",
    "cat_arts_sub": "博物館、ギャラリー、イベント",
    "cat_family": "ファミリー向け",
    "cat_family_sub": "すべての年齢に適した活動",
    "tab_today": "今日",
    "tab_week": "今週",
    "today_link": "カレンダー全体を見る →",
    "how_headline": "前も、中も、後も — ここにいます。",
    "how_sub": "SomaVioは最初のアイデアから最後の思い出まで、旅全体をサポートします。",
    "how1_title": "スマートに計画する",
    "how1_text": "到着前にアイデアを保存してコンテキストを取得。",
    "how2_title": "今必要なものすべてを",
    "how2_text": "天気、安全、特典、地元情報 — 一か所に。",
    "how3_title": "一日の後も — まだここにいます。",
    "how3_text": "保存したスポットと旅のまとめ、いつでもアクセス可能。",
    "timeline1_label": "滞在前",
    "timeline2_label": "滞在中",
    "timeline3_label": "滞在後",
    "b2b_text": "ホテルや地元ビジネスですか？",
    "b2b_link": "→ SomaVioのパートナーになる",
    "cta_headline": "アルバータ体験はここから始まります。",
    "cta_btn": "キャンモアを探索 →"
  }
};

  const PAGE_TRANSLATIONS = {
  "guesthub": {
    "en": {
      "context_label": "Canmore · Logged-in Guest Hub",
      "guest_welcome": "Welcome, Wilson",
      "guest_room": "Room 304",
      "guest_identity_sub": "The Alpine Hotel · Private guest dashboard",
      "hotel_name": "The Alpine Hotel",
      "language_english": "English",
      "language_japanese": "日本語",
      "hero_label": "Guest Hub · StayCare ready",
      "hero_title": "A smoother stay starts with <em>the right next experience.</em>",
      "hero_sub": "Curated dining, spa, local experiences and hotel support — organized around what guests are most likely to use during the stay.",
      "hero_primary_cta": "Explore guest experiences →",
      "hero_secondary_cta": "Open StayCare support",
      "hero_weather_label": "Today in Canmore",
      "hero_weather_value": "8°C · Clear mountain morning",
      "hero_weather_note": "Good visibility for town walks and scenic dining plans.",
      "hero_stay_label": "Your stay window",
      "hero_stay_value": "Check-in 3:00 PM · Check-out 11:00 AM",
      "hero_stay_note": "Late checkout can be requested from Hotel Basics & Utilities.",
      "hero_support_label": "Front desk",
      "hero_support_value": "Ext. 0 · StayCare ready",
      "hero_support_note": "Use Ext. 999 for urgent overnight hotel support.",
      "guest_safety_label": "Wildlife Alert · Official check recommended",
      "guest_safety_title": "Grizzly activity reported near Grassi Lakes Trail.",
      "guest_safety_copy": "Before heading out, check current trail, wildlife, weather and access conditions from official sources.",
      "guest_safety_source": "Source: Parks Canada / Alberta Parks",
      "guest_safety_cta": "View safety checks →",
      "utilities_kicker": "Compact hotel support",
      "utilities_title": "Hotel Basics & Utilities",
      "utilities_sub": "Essential needs stay available without competing with premium experiences. Expand Wi‑Fi details or send a routine request in one click.",
      "before_go_kicker": "Before you go",
      "before_go_title": "A 30-second confidence check before leaving the hotel.",
      "before_go_copy": "Use the safety page for official links and guest-ready reminders before trails, scenic drives or local activities.",
      "before_go_passes": "Check if your destination needs passes or permits.",
      "before_go_drones": "Review drone restrictions before flying or filming.",
      "before_go_alerts": "Check active alerts for the area you are visiting.",
      "before_go_cta": "Open Safety Hub →",
      "wifi_network_label": "Network",
      "wifi_title": "Wi‑Fi access",
      "wifi_note": "Tap to reveal the guest network, password and a direct support trigger if your device will not connect.",
      "wifi_expand_label": "Show connection details",
      "wifi_password_label": "Password",
      "wifi_support_intro": "Having trouble configuring?",
      "wifi_support_link": "Click here to notify the front desk.",
      "utility_action": "Send request →",
      "service_towels_title": "Request Extra Towels",
      "service_towels_desc": "Ask housekeeping for towels, pillows or bedding.",
      "service_cleaning_title": "Room Cleaning",
      "service_cleaning_desc": "Request housekeeping or a preferred cleaning window.",
      "service_checkout_title": "Late Checkout Inquiry",
      "service_checkout_desc": "Check availability for a later departure.",
      "premium_kicker": "Experience showcase",
      "premium_title": "Guest Experience & Local Perks",
      "premium_sub": "Reserve the best parts of your stay first — dinner, spa recovery and trusted local experiences are presented up front for fast, high-confidence booking.",
      "dinner_badge_discount": "Room-key dining benefit",
      "dinner_badge_editorial": "Tonight's pick",
      "dinner_title": "Reserve an Exclusive Dinner",
      "dinner_copy": "Settle into a mountain evening with a table held for hotel guests, seasonal Canadian dishes and a calm walk back to your room.",
      "dinner_cta": "Reserve an Exclusive Dinner →",
      "spa_badge_discount": "15% guest advantage",
      "spa_title": "Sanctuary Spa Session",
      "spa_copy": "A recovery window designed for tired legs, dry mountain air and a slower evening after the trail.",
      "spa_cta": "Book Sanctuary Spa Session →",
      "guide_badge_discount": "Guest trail advantage",
      "guide_title": "Guided Rockies Experience",
      "guide_copy": "A local orientation option for guests who want a safer, more confident mountain day.",
      "guide_cta": "Request Guided Experience →",
      "experience_kicker": "StayCare",
      "experience_title": "Here to make your stay feel cared for.",
      "experience_copy": "For anything beyond the quick hotel basics above — comfort, timing, language support, special circumstances or a small detail you would like adjusted — StayCare gives you a calm way to reach the right team and feel heard.",
      "experience_button": "Talk to StayCare 💡",
      "care_route_1_title": "Share once",
      "care_route_1_copy": "Tell us what would make your stay smoother.",
      "care_route_2_title": "Routed calmly",
      "care_route_2_copy": "The right hotel team sees the request clearly.",
      "care_route_3_title": "Followed up",
      "care_route_3_copy": "StayCare helps keep the conversation visible.",
      "care_listening_label": "Guest care channel",
      "care_listening_title": "A simple way to be heard, without waiting at the desk.",
      "care_listening_copy": "Use it for comfort preferences, timing help, language support, accessibility needs, special requests or anything that would make the rest of your stay better.",
      "care_chip_1_title": "Not only problems",
      "care_chip_1_copy": "Also useful for preferences and special help.",
      "care_chip_2_title": "Guest-first",
      "care_chip_2_copy": "Designed to reduce friction before it grows.",
      "manager_hours_label": "Executive care hours",
      "manager_hours_value": "8:00 AM – 8:00 PM",
      "manager_hours_sub": "After hours, StayCare records your request or alerts the on-call hotel team when needed.",
      "footer_note": "Private guest dashboard for hotel support, local orientation and stay-moment recovery. SomaVio is not an emergency service; call 911 for emergencies.",
      "modal_title": "StayCare Concierge",
      "modal_sub": "Share what would make your stay smoother. The hotel team sees your request in English while you can communicate in Japanese or English.",
      "modal_story_label": "Executive care promise",
      "modal_story_text": "Our General Manager is on-site for executive care from <strong>8:00 AM to 8:00 PM</strong>. Outside these hours, StayCare keeps your message organized and can alert our <strong>24/7 on-call staff</strong> when immediate hotel support is needed.",
      "night_staff_title": "Call 24/7 Night Staff",
      "night_staff_sub": "Use room phone Ext. 999 for immediate hotel support.",
      "emergency_services_title": "Local Emergency Services",
      "emergency_services_sub": "Call 911 immediately for police, fire or medical emergencies.",
      "demo_view_label": "Demo view:",
      "guest_view_btn": "👤 Guest View",
      "staff_view_btn": "🏨 Staff View",
      "staff_dashboard_label": "🏨 Hotel Staff Dashboard — Messages received in English",
      "staff_seed_room": "Room 304 · Wilson · 🇯🇵 Japanese",
      "staff_seed_text": "Guest asks: \"Could you please bring extra towels and pillows to my room?\"",
      "staff_seed_original": "Original (JA): 「タオルと枕を追加でお部屋に持ってきていただけますか？」",
      "staff_reply_placeholder": "Reply in English — guest will see it in Japanese...",
      "staff_send_btn": "Send →",
      "staff_quick_label": "Prepared replies — saves front desk time",
      "staff_quick_handled": "Request is being handled",
      "staff_quick_housekeeping": "Housekeeping notified",
      "staff_quick_towels": "Towels on the way",
      "staff_quick_callback": "Front desk will call",
      "staff_quick_manager": "Checking with manager",
      "chat_hotel_title": "The Alpine Hotel",
      "chat_hotel_sub": "Concierge team · replies in your language"
    },
    "ja": {
      "context_label": "キャンモア · 宿泊者専用ゲストハブ",
      "guest_welcome": "ようこそ、Wilson",
      "guest_room": "304号室",
      "guest_identity_sub": "ザ・アルパインホテル · 宿泊者専用ダッシュボード",
      "hotel_name": "ザ・アルパインホテル",
      "language_english": "English",
      "language_japanese": "日本語",
      "hero_label": "ゲストハブ · StayCare対応",
      "hero_title": "より快適な滞在は、<em>次の体験選び</em>から始まります。",
      "hero_sub": "ダイニング、スパ、地域体験、ホテルサポートを、滞在中に使いやすい形で整理しました。",
      "hero_primary_cta": "ゲスト体験を見る →",
      "hero_secondary_cta": "StayCareサポートを開く",
      "hero_weather_label": "今日のキャンモア",
      "hero_weather_value": "8°C · 澄んだ山の朝",
      "hero_weather_note": "街歩きや景色を楽しむ食事プランに向いた視界です。",
      "hero_stay_label": "ご滞在時間",
      "hero_stay_value": "チェックイン 15:00 · チェックアウト 11:00",
      "hero_stay_note": "レイトチェックアウトは Hotel Basics & Utilities から依頼できます。",
      "hero_support_label": "フロントデスク",
      "hero_support_value": "内線0 · StayCare対応",
      "hero_support_note": "夜間の緊急ホテルサポートは内線999をご利用ください。",
      "guest_safety_label": "野生動物警報 · 公式情報の確認推奨",
      "guest_safety_title": "グラッシーレイクストレイル付近でグリズリーの活動が報告されています。",
      "guest_safety_copy": "出発前に、トレイル、野生動物、天気、アクセス条件を公式情報で確認してください。",
      "guest_safety_source": "情報源：パークスカナダ / アルバータパークス",
      "guest_safety_cta": "安全情報を確認 →",
      "utilities_kicker": "コンパクトなホテルサポート",
      "utilities_title": "ホテル基本情報・ユーティリティ",
      "utilities_sub": "基本的なご依頼は、プレミアム体験の邪魔にならない形でいつでも利用できます。Wi‑Fi詳細の確認や通常リクエストをワンクリックで送信できます。",
      "before_go_kicker": "出発前チェック",
      "before_go_title": "ホテルを出る前の30秒チェック。",
      "before_go_copy": "トレイル、ドライブ、地域アクティビティの前に、公式リンクと宿泊者向けリマインダーを確認できます。",
      "before_go_passes": "目的地にパスや許可が必要か確認してください。",
      "before_go_drones": "ドローン撮影・飛行の制限を確認してください。",
      "before_go_alerts": "訪問エリアの最新アラートを確認してください。",
      "before_go_cta": "Safety Hubを開く →",
      "wifi_network_label": "ネットワーク",
      "wifi_title": "Wi‑Fiアクセス",
      "wifi_note": "タップするとゲスト用ネットワーク、パスワード、接続できない場合のサポート連絡が表示されます。",
      "wifi_expand_label": "接続情報を表示",
      "wifi_password_label": "パスワード",
      "wifi_support_intro": "設定でお困りですか？",
      "wifi_support_link": "こちらをクリックしてフロントに知らせる。",
      "utility_action": "リクエスト送信 →",
      "service_towels_title": "タオル追加依頼",
      "service_towels_desc": "タオル、枕、寝具の追加を依頼できます。",
      "service_cleaning_title": "客室清掃",
      "service_cleaning_desc": "清掃または希望時間帯を依頼できます。",
      "service_checkout_title": "レイトチェックアウト確認",
      "service_checkout_desc": "遅めの出発が可能か確認できます。",
      "premium_kicker": "体験ショーケース",
      "premium_title": "ゲスト体験・ローカル特典",
      "premium_sub": "ディナー、スパ、信頼できる地域体験を最初に提案し、宿泊中に迷わず予約できるようにします。",
      "dinner_badge_discount": "ルームキー特典",
      "dinner_badge_editorial": "今夜のおすすめ",
      "dinner_title": "特別ディナーを予約",
      "dinner_copy": "宿泊者向けに確保された席で、季節のカナディアン料理と落ち着いた山の夜をお楽しみください。",
      "dinner_cta": "特別ディナーを予約 →",
      "spa_badge_discount": "宿泊者15%優待",
      "spa_title": "サンクチュアリ・スパ",
      "spa_copy": "トレイル後の脚、乾いた山の空気、ゆったりした夜のための回復時間です。",
      "spa_cta": "スパセッションを予約 →",
      "guide_badge_discount": "宿泊者向けトレイル特典",
      "guide_title": "ロッキー山脈ガイド体験",
      "guide_copy": "より安全で自信のある山の一日を過ごしたいゲスト向けの地域案内です。",
      "guide_cta": "ガイド体験を依頼 →",
      "experience_kicker": "StayCare",
      "experience_title": "滞在がきちんとケアされていると感じられるために。",
      "experience_copy": "上の基本サービスだけでは足りないこと、快適さ、時間調整、言語サポート、特別な事情、小さな調整などがあれば、StayCareで落ち着いて適切なチームへ伝えられます。",
      "experience_button": "StayCareに相談する 💡",
      "care_route_1_title": "一度伝える",
      "care_route_1_copy": "滞在をより快適にする内容を教えてください。",
      "care_route_2_title": "落ち着いて振り分け",
      "care_route_2_copy": "適切なホテルチームに明確に届きます。",
      "care_route_3_title": "見える化して対応",
      "care_route_3_copy": "会話が見える状態で続きます。",
      "care_listening_label": "ゲストケアチャンネル",
      "care_listening_title": "フロントで待たずに、声が届くシンプルな方法です。",
      "care_listening_copy": "快適さの希望、時間調整、言語サポート、アクセシビリティ、特別な依頼、滞在をより良くする相談に使えます。",
      "care_chip_1_title": "問題だけではありません",
      "care_chip_1_copy": "希望や特別なサポートにも使えます。",
      "care_chip_2_title": "ゲスト中心",
      "care_chip_2_copy": "小さな摩擦が大きくなる前に減らします。",
      "manager_hours_label": "エグゼクティブケア時間",
      "manager_hours_value": "8:00 AM – 8:00 PM",
      "manager_hours_sub": "時間外はStayCareがリクエストを記録し、必要に応じてオンコールチームへ知らせます。",
      "footer_note": "ホテルサポート、地域案内、滞在中のリカバリーのための宿泊者専用ダッシュボードです。SomaVioは緊急サービスではありません。緊急時は911へ。",
      "modal_title": "StayCareコンシェルジュ",
      "modal_sub": "滞在をより快適にするための内容を共有してください。ホテルチームには英語で届き、日本語または英語でやり取りできます。",
      "modal_story_label": "エグゼクティブケアのお約束",
      "modal_story_text": "総支配人は <strong>8:00 AM から 8:00 PM</strong> まで館内でケア対応を行います。時間外でもStayCareがメッセージを整理し、必要に応じて <strong>24時間オンコールスタッフ</strong> に知らせます。",
      "night_staff_title": "24時間夜間スタッフへ連絡",
      "night_staff_sub": "すぐにホテルサポートが必要な場合は客室電話の内線999をご利用ください。",
      "emergency_services_title": "地域の緊急サービス",
      "emergency_services_sub": "警察・消防・医療の緊急時はすぐに911へ電話してください。",
      "demo_view_label": "デモ表示:",
      "guest_view_btn": "👤 ゲスト表示",
      "staff_view_btn": "🏨 スタッフ表示",
      "staff_dashboard_label": "🏨 ホテルスタッフ画面 — メッセージは英語で受信",
      "staff_seed_room": "304号室 · Wilson · 🇯🇵 日本語",
      "staff_seed_text": "ゲストの依頼:「タオルと枕を追加でお部屋に持ってきていただけますか？」",
      "staff_seed_original": "原文（JA）:「タオルと枕を追加でお部屋に持ってきていただけますか？」",
      "staff_reply_placeholder": "英語で返信 — ゲストには日本語で表示されます...",
      "staff_send_btn": "送信 →",
      "staff_quick_label": "定型返信 — フロント業務を短縮",
      "staff_quick_handled": "対応中です",
      "staff_quick_housekeeping": "清掃係へ連絡済み",
      "staff_quick_towels": "タオルをお持ちします",
      "staff_quick_callback": "フロントから電話します",
      "staff_quick_manager": "マネージャー確認中",
      "chat_hotel_title": "ザ・アルパインホテル",
      "chat_hotel_sub": "コンシェルジュチーム · ご希望の言語で返信"
    }
  },
  "safety": {
    "en": {
      "safety_context": "Alberta · Safety & Conditions",
      "nav_explore": "Explore",
      "nav_stay": "Stay",
      "nav_eat": "Eat",
      "nav_plan": "Plan Your Day",
      "nav_safety": "Safety",
      "nav_rules": "Local Rules",
      "nav_about": "About Canmore",
      "staying_here": "Staying here? →",
      "lang_english": "English",
      "lang_japanese": "日本語",
      "drawer_label_explore": "Explore",
      "drawer_home": "Home",
      "drawer_explore": "Explore Canmore",
      "drawer_plan": "Plan Your Day",
      "drawer_safety": "Safety & Conditions",
      "drawer_hotel": "Guest Hub",
      "drawer_partners": "For Partners",
      "drawer_lang_label": "Language",
      "drawer_footer": "SomaVio · Local guidance for Alberta\n© 2026",
      "safety_hero_badge": "Official Government Sources Monitored In Real-Time",
      "safety_hero_sub": "A premium safety orientation layer for Canmore, Kananaskis and Banff visitors — built to turn official alerts into calm, practical decisions.",
      "safety_hero_sources_label": "Official-source monitor",
      "source_parks_canada_name": "Parks Canada",
      "source_status_monitored": "Monitored",
      "source_alberta_parks_name": "Alberta Parks",
      "source_weather_name": "Environment and Climate Change Canada",
      "source_rivers_name": "Alberta River Basins / Town of Canmore",
      "safety_bar_label": "Stay-moment safety layer",
      "safety_bar_text": "Mountain conditions can change quickly. Check official sources before you choose a trail, river activity or scenic drive.",
      "safety_bar_source": "Source: Parks Canada / Alberta Parks / Town of Canmore",
      "safety_bar_link": "View official checks →",
      "alert_section_kicker": "Risk pillars",
      "alert_section_title": "Mountain risks, translated into decisions.",
      "alert_section_sub": "Each pillar has its own visual identity so visitors can identify the type of risk quickly, then open a calm educational layer instead of scanning identical text boxes.",
      "visual_wildlife": "Wildlife space",
      "alert_bear_source": "Source: Parks Canada / Alberta Parks",
      "alert_bear_title": "Bear & Wildlife Activity",
      "alert_bear_desc": "Bear, cougar, elk and wildlife movement can affect trail access and visitor behaviour. Treat every sighting or warning as current until official sources clear it.",
      "alert_bear_context": "Active awareness: wildlife activity can change by hour, season and food availability.",
      "safety_wildlife_cta": "Learn About Local Guidance & Support →",
      "visual_avalanche": "Snow terrain",
      "alert_avalanche_source": "Source: Avalanche Canada",
      "alert_avalanche_title": "Avalanches",
      "alert_avalanche_desc": "Backcountry snow conditions can shift quickly with temperature, wind, snowfall and sun exposure. Even scenic winter routes may require avalanche awareness.",
      "alert_avalanche_context": "Seasonal awareness: winter and spring routes require forecast checks before departure.",
      "alert_cta": "Learn About Local Guidance & Support →",
      "visual_fire": "Fire bans",
      "alert_wildfire_source": "Source: Alberta Wildfire",
      "alert_wildfire_title": "Wildfires & Fire Bans",
      "alert_wildfire_desc": "Smoke, fire bans, closures and evacuation notices can change travel decisions across Alberta mountain regions.",
      "alert_wildfire_context": "Regional awareness: check fire status and bans before campfires, backcountry trips or highway travel.",
      "visual_weather": "Storm shifts",
      "alert_weather_source": "Source: Environment and Climate Change Canada",
      "alert_weather_title": "Severe Weather",
      "alert_weather_desc": "Mountain weather can move from calm to unsafe quickly, especially around high winds, thunderstorms, freezing rain and sudden temperature drops.",
      "alert_weather_context": "Daily awareness: always compare the town forecast with the elevation and exposure of your route.",
      "visual_closure": "Closures + water flow",
      "alert_closure_water_source": "Source: Parks Canada / Alberta Parks / Town of Canmore / Alberta River Basins",
      "alert_closure_water_title": "Closures & Water Flow",
      "alert_closure_water_desc": "Closures, rockfall hazards, high streamflow and debris movement can change safe access quickly. A route can look beautiful and still be unsafe because the hazard is overhead, upstream or beneath a riverbank.",
      "closure_pill_grassi": "Grassi Lakes rockfall context",
      "closure_pill_snowmelt": "Heavy rain + snowmelt flow",
      "closure_pill_debris": "Flash flood & debris flow awareness",
      "alert_closure_water_context": "Recent context: real closures and high-water advisories show why visitor guidance must connect trails, weather, rivers and official checks together.",
      "prepared_image_title": "A calmer visitor is a safer visitor.",
      "prepared_image_text": "The goal is not to make the mountains feel dangerous. The goal is to make the right decision feel easy before the day begins.",
      "before_kicker": "Before you go",
      "before_title": "The quick mountain-readiness check",
      "before_1": "Check official conditions before leaving — not only the night before.",
      "before_2": "Respect trail closures and posted signs even when other visitors continue ahead.",
      "before_3": "Tell someone your route and expected return time.",
      "before_4": "Check mountain weather and road conditions before longer drives.",
      "before_5": "Download offline maps before heading into areas with unreliable signal.",
      "before_7": "Keep children, pets and inexperienced visitors away from fast water and unstable banks.",
      "sources_kicker": "Official sources",
      "sources_title": "Official sources remain the authority.",
      "sources_sub": "SomaVio is designed to route visitors toward official-source checks, not to replace government advisories, emergency instructions or posted signs.",
      "source_alberta_parks_desc": "Trail reports, Kananaskis visitor information, advisories and closures.",
      "source_open": "Open source →",
      "source_parks_canada_desc": "Banff National Park conditions, wildlife alerts, closures and official visitor guidance.",
      "source_avalanche_name": "Avalanche Canada",
      "source_avalanche_desc": "Avalanche forecasts and public avalanche safety information for winter and spring routes.",
      "source_weather_desc": "Mountain weather forecasts, severe weather alerts and daily conditions.",
      "source_wildfire_name": "Alberta Wildfire",
      "source_wildfire_desc": "Wildfire status, fire bans, smoke conditions and evacuation-related information.",
      "source_rivers_desc": "High streamflow advisories, flood monitoring and local hazard dashboards.",
      "safety_wildlife_modal_label": "Local Educational Partnership",
      "wildlife_info_title": "Wildlife safety is a behaviour system.",
      "wildlife_info_lead": "Real confidence in the Rockies comes from reading the landscape, managing stress and rehearsing calm choices before a family or adventurer enters bear country.",
      "wildlife_signal_wind": "Wind",
      "wildlife_signal_tracks": "Tracks",
      "wildlife_signal_food": "Food",
      "wildlife_signal_space": "Space",
      "wildlife_phase_1_label": "Phase 1",
      "wildlife_phase_1_title": "Wilderness Reading",
      "wildlife_phase_1_text": "Visitors learn to notice context: wind direction, fresh signs, food sources, sightlines, group spacing and whether the landscape is asking for a slower plan.",
      "wildlife_gauge_calm": "Calm",
      "wildlife_gauge_signal": "Signal",
      "wildlife_phase_2_label": "Phase 2",
      "wildlife_phase_2_title": "Stress Management",
      "wildlife_phase_2_text": "The first instruction stays simple: stay calm, do not run. The purpose is to reduce panic, create distance and make a safer decision without sudden movement.",
      "wildlife_stat_1": "3 response habits",
      "wildlife_stat_2": "Inert equipment only",
      "wildlife_stat_3": "No sales pressure",
      "wildlife_phase_3_label": "Phase 3",
      "wildlife_phase_3_title": "The Muscle Memory Factor",
      "wildlife_phase_3_text": "This demo uses illustrative training indicators instead of fabricated safety claims: repetition, body position, voice control and calm decision-making become easier when practiced physically.",
      "wildlife_institution_title": "Community awareness, not a shortcut.",
      "wildlife_institution_text": "In this simulated sponsorship model, certified local partners and Canmore-based instructors support the portal through in-person ecological education workshops and free physical simulation sessions using inert demonstration equipment. Families and adventurers can rehearse safe reactions, reduce fear and understand the mountain environment before stepping onto the trail.",
      "wildlife_badge_1": "Certified local instruction model",
      "wildlife_badge_2": "Hands-on simulation with inert equipment",
      "wildlife_badge_3": "Education-first public awareness",
      "modal_cta_close": "Got it",
      "modal_label": "Local guidance & support",
      "modal_avalanche_title": "Avalanche risk is invisible from the parking lot",
      "modal_avalanche_risk": "A blue-sky day can still hide unstable snow layers. Wind loading, warming, fresh snow and terrain angle can turn a scenic plan into a serious backcountry decision.",
      "modal_support_title": "Local learning, not shortcuts",
      "modal_avalanche_prevent": "Preventive behaviour: read the forecast, understand whether your route enters avalanche terrain and choose lower-risk alternatives when conditions are uncertain.",
      "modal_wildfire_title": "Wildfire awareness protects visitors and the valley",
      "modal_wildfire_risk": "Smoke, dry vegetation, campfire restrictions and fast-changing fire behaviour can affect health, visibility, road access and local emergency capacity.",
      "modal_wildfire_prevent": "Preventive behaviour: check fire bans, avoid sparks, respect closures, monitor smoke sensitivity and keep evacuation information visible when conditions escalate.",
      "modal_weather_title": "Severe weather moves differently in the mountains",
      "modal_weather_risk": "Storm cells, wind, hail, cold rain and sudden temperature drops can arrive faster at elevation than visitors expect from the town forecast.",
      "modal_weather_prevent": "Preventive behaviour: check official alerts, compare weather with the elevation of your route, carry layers and choose indoor or lower-exposure options when warnings increase.",
      "modal_closure_title": "Closures, rivers and debris flow belong together",
      "modal_closure_risk": "Grassi Lakes rockfall, high Bow River flow, cold fast water and debris movement show the same visitor problem: the visible path may not reveal the real hazard.",
      "modal_closure_prevent": "Preventive behaviour: respect closure signs, stay away from unstable banks, keep children and pets far from fast water and use official alternatives until conditions are cleared.",
      "footer_tagline": "Local guidance for Alberta.",
      "footer_copy": "© 2026 SomaVio",
      "footer_visitors": "For Visitors",
      "footer_partners": "For Partners",
      "footer_hotels": "For Hotels",
      "footer_local_business": "For Local Businesses",
      "footer_organizations": "For Organizations",
      "footer_studio": "Partner Studio",
      "footer_message": "SomaVio complements existing systems. It does not replace PMS, OTA or emergency procedures.",
      "footer_legal": "Legal",
      "footer_privacy": "Privacy Policy",
      "footer_terms": "Terms of Use",
      "footer_contact": "Contact",
      "safety_hero_title": "Read the Rockies<br/><em>before you go.</em>",
      "emergency_text": "In any emergency: call <strong>911</strong> immediately. For park emergencies, follow posted instructions and contact official dispatch when directed.",
      "safety_guest_return_label": "Guest safety view",
      "safety_guest_return_title": "Viewing safety from your hotel Guest Hub.",
      "safety_guest_return_copy": "You can return to The Alpine Hotel dashboard anytime.",
      "safety_guest_return_cta": "Back to Guest Hub →",
      "language_english": "English",
      "language_japanese": "日本語"
},
    "ja": {
      "safety_context": "アルバータ · 安全情報とコンディション",
      "nav_explore": "探索",
      "nav_stay": "宿泊",
      "nav_eat": "食事",
      "nav_plan": "今日の計画",
      "nav_safety": "安全情報",
      "nav_rules": "地域ルール",
      "nav_about": "キャンモアについて",
      "staying_here": "宿泊中ですか？ →",
      "lang_english": "English",
      "lang_japanese": "日本語",
      "drawer_label_explore": "探索",
      "drawer_home": "ホーム",
      "drawer_explore": "キャンモアを探索",
      "drawer_plan": "今日の計画",
      "drawer_safety": "安全情報とコンディション",
      "drawer_hotel": "Guest Hub",
      "drawer_partners": "パートナー向け",
      "drawer_lang_label": "言語",
      "drawer_footer": "SomaVio · アルバータのローカルガイダンス\n© 2026",
      "safety_hero_badge": "公式政府情報源をリアルタイムで確認",
      "safety_hero_sub": "キャンモア、カナナスキス、バンフを訪れる人のためのプレミアム安全オリエンテーション。公式アラートを落ち着いた実用的な判断につなげます。",
      "safety_hero_sources_label": "公式情報源モニター",
      "source_parks_canada_name": "Parks Canada",
      "source_status_monitored": "確認中",
      "source_alberta_parks_name": "Alberta Parks",
      "source_weather_name": "Environment and Climate Change Canada",
      "source_rivers_name": "Alberta River Basins / Town of Canmore",
      "safety_bar_label": "滞在中の安全レイヤー",
      "safety_bar_text": "山の状況は急に変わることがあります。トレイル、川のアクティビティ、景色の良いドライブを選ぶ前に公式情報を確認してください。",
      "safety_bar_source": "情報源：Parks Canada / Alberta Parks / Town of Canmore",
      "safety_bar_link": "公式チェックを見る →",
      "alert_section_kicker": "リスクの柱",
      "alert_section_title": "山のリスクを、判断しやすい情報へ。",
      "alert_section_sub": "各リスクには独自の視覚アイデンティティを持たせ、同じようなテキストボックスを読む代わりに、種類をすばやく把握し、落ち着いた教育レイヤーを開けるようにしています。",
      "visual_wildlife": "野生動物の距離",
      "alert_bear_source": "情報源：Parks Canada / Alberta Parks",
      "alert_bear_title": "クマ・野生動物の活動",
      "alert_bear_desc": "クマ、クーガー、エルクなどの動きは、トレイルの利用や訪問者の行動に影響します。公式情報で解除されるまで、目撃情報や警告は現在有効なものとして扱ってください。",
      "alert_bear_context": "注意ポイント：野生動物の活動は時間、季節、食べ物の状況によって変わります。",
      "safety_wildlife_cta": "地域ガイダンスとサポートを見る →",
      "visual_avalanche": "雪山地形",
      "alert_avalanche_source": "情報源：Avalanche Canada",
      "alert_avalanche_title": "雪崩",
      "alert_avalanche_desc": "バックカントリーの雪の状態は、気温、風、降雪、日射によって急に変わることがあります。景色の良い冬ルートでも雪崩への注意が必要な場合があります。",
      "alert_avalanche_context": "季節の注意：冬から春のルートでは出発前の予報確認が必要です。",
      "alert_cta": "地域ガイダンスとサポートを見る →",
      "visual_fire": "火気制限",
      "alert_wildfire_source": "情報源：Alberta Wildfire",
      "alert_wildfire_title": "山火事・火気禁止",
      "alert_wildfire_desc": "煙、火気禁止、閉鎖、避難情報は、アルバータ山岳地域の移動判断に影響します。",
      "alert_wildfire_context": "地域の注意：キャンプファイヤー、バックカントリー、道路移動の前に火災状況と禁止事項を確認してください。",
      "visual_weather": "天候の急変",
      "alert_weather_source": "情報源：Environment and Climate Change Canada",
      "alert_weather_title": "悪天候",
      "alert_weather_desc": "山の天気は、強風、雷雨、凍雨、急な気温低下などで、穏やかな状態から危険な状態へすばやく変わることがあります。",
      "alert_weather_context": "毎日の注意：町の天気予報だけでなく、目的地の標高や露出も確認してください。",
      "visual_closure": "閉鎖＋水量",
      "alert_closure_water_source": "情報源：Parks Canada / Alberta Parks / Town of Canmore / Alberta River Basins",
      "alert_closure_water_title": "閉鎖・水量",
      "alert_closure_water_desc": "閉鎖、落石、高い水量、土砂の動きは、安全なアクセスを急に変えることがあります。ルートが美しく見えても、危険は頭上、上流、または川岸の下にある場合があります。",
      "closure_pill_grassi": "グラッシーレイクス落石の文脈",
      "closure_pill_snowmelt": "大雨＋雪解け水",
      "closure_pill_debris": "鉄砲水・土石流への注意",
      "alert_closure_water_context": "最近の文脈：実際の閉鎖や高水位注意報は、トレイル、天気、川、公式チェックをつなげる必要性を示しています。",
      "prepared_image_title": "落ち着いた訪問者は、より安全な訪問者です。",
      "prepared_image_text": "目的は山を危険に感じさせることではありません。一日が始まる前に、正しい判断をしやすくすることです。",
      "before_kicker": "出発前に",
      "before_title": "山へ向かう前のクイック確認",
      "before_1": "出発前に公式コンディションを確認してください。前夜だけでは不十分です。",
      "before_2": "他の訪問者が進んでいても、閉鎖や掲示された標識を守ってください。",
      "before_3": "ルートと帰着予定時刻を誰かに伝えてください。",
      "before_4": "長距離ドライブの前に山の天気と道路状況を確認してください。",
      "before_5": "電波が不安定な場所へ行く前にオフライン地図を保存してください。",
      "before_7": "子ども、ペット、経験の浅い訪問者を、速い水流や不安定な川岸から離してください。",
      "sources_kicker": "公式情報源",
      "sources_title": "公式情報源が最終的な権威です。",
      "sources_sub": "SomaVioは訪問者を公式情報確認へ誘導するためのものであり、政府の注意報、緊急指示、掲示された標識に代わるものではありません。",
      "source_alberta_parks_desc": "トレイル情報、カナナスキスの訪問者情報、注意報、閉鎖情報。",
      "source_open": "公式情報を開く →",
      "source_parks_canada_desc": "バンフ国立公園の状況、野生動物アラート、閉鎖、公式訪問者ガイダンス。",
      "source_avalanche_name": "Avalanche Canada",
      "source_avalanche_desc": "冬から春のルート向けの雪崩予報と一般向け雪崩安全情報。",
      "source_weather_desc": "山岳天気予報、悪天候アラート、日々の状況。",
      "source_wildfire_name": "Alberta Wildfire",
      "source_wildfire_desc": "山火事状況、火気禁止、煙の状況、避難関連情報。",
      "source_rivers_desc": "高水位注意報、洪水監視、地域の危険ダッシュボード。",
      "safety_wildlife_modal_label": "地域教育パートナーシップ",
      "wildlife_info_title": "野生動物安全は行動のシステムです。",
      "wildlife_info_lead": "ロッキーでの本当の安心感は、地形を読み、ストレスを管理し、家族や冒険者がクマの生息地へ入る前に落ち着いた選択を練習することから生まれます。",
      "wildlife_signal_wind": "風",
      "wildlife_signal_tracks": "足跡",
      "wildlife_signal_food": "食べ物",
      "wildlife_signal_space": "距離",
      "wildlife_phase_1_label": "フェーズ1",
      "wildlife_phase_1_title": "自然を読む",
      "wildlife_phase_1_text": "風向き、新しい痕跡、食べ物の源、見通し、グループの間隔、そして景色がより慎重な計画を求めているかを意識します。",
      "wildlife_gauge_calm": "冷静",
      "wildlife_gauge_signal": "サイン",
      "wildlife_phase_2_label": "フェーズ2",
      "wildlife_phase_2_title": "ストレス管理",
      "wildlife_phase_2_text": "最初の指示はシンプルです。落ち着く、走らない。目的はパニックを減らし、距離を取り、急な動きなしで安全な判断につなげることです。",
      "wildlife_stat_1": "3つの反応習慣",
      "wildlife_stat_2": "不活性デモ用具のみ",
      "wildlife_stat_3": "販売圧力なし",
      "wildlife_phase_3_label": "フェーズ3",
      "wildlife_phase_3_title": "身体記憶の要素",
      "wildlife_phase_3_text": "このデモでは安全性の虚偽主張ではなく、反復、姿勢、声のコントロール、冷静な判断といった例示的なトレーニング指標を使います。",
      "wildlife_institution_title": "近道ではなく、地域の意識づくり。",
      "wildlife_institution_text": "このシミュレーション型スポンサーシップモデルでは、認定された地域パートナーとキャンモア拠点のインストラクターが、対面の生態教育ワークショップと不活性デモ用具を使った無料の身体シミュレーションを通じてポータルを支援します。",
      "wildlife_badge_1": "認定地域指導モデル",
      "wildlife_badge_2": "不活性用具による実践シミュレーション",
      "wildlife_badge_3": "教育優先の公共啓発",
      "modal_cta_close": "了解",
      "modal_label": "地域ガイダンスとサポート",
      "modal_avalanche_title": "雪崩リスクは駐車場からは見えません",
      "modal_avalanche_risk": "青空の日でも不安定な雪層が隠れていることがあります。風で積もった雪、気温上昇、新雪、斜面角度が景色の良い計画を深刻な判断に変えることがあります。",
      "modal_support_title": "近道ではなく、地域で学ぶ",
      "modal_avalanche_prevent": "予防行動：予報を読み、ルートが雪崩地形に入るか理解し、不確実な場合はよりリスクの低い代替案を選びます。",
      "modal_wildfire_title": "山火事への意識は訪問者と谷を守ります",
      "modal_wildfire_risk": "煙、乾いた植生、キャンプファイヤー制限、急変する火災行動は、健康、視界、道路アクセス、地域の緊急対応に影響します。",
      "modal_wildfire_prevent": "予防行動：火気禁止を確認し、火花を避け、閉鎖を守り、煙への感受性を確認し、状況悪化時の避難情報を見える場所に置きます。",
      "modal_weather_title": "山では悪天候の動き方が異なります",
      "modal_weather_risk": "嵐、風、ひょう、冷たい雨、急な気温低下は、町の予報から想像するより早く標高の高い場所に到達することがあります。",
      "modal_weather_prevent": "予防行動：公式アラートを確認し、目的地の標高と天気を比較し、防寒具を持ち、警告が高まる場合は屋内または露出の少ない選択肢を選びます。",
      "modal_closure_title": "閉鎖、川、土石流は一緒に考える必要があります",
      "modal_closure_risk": "グラッシーレイクスの落石、ボウ川の高水量、冷たく速い水、土砂の動きは同じ問題を示します。見えている道だけでは本当の危険が分からないことがあります。",
      "modal_closure_prevent": "予防行動：閉鎖標識を守り、不安定な川岸に近づかず、子どもやペットを速い水流から離し、公式に安全が確認されるまで代替ルートを使います。",
      "footer_tagline": "アルバータのローカルガイダンス。",
      "footer_copy": "© 2026 SomaVio",
      "footer_visitors": "訪問者向け",
      "footer_partners": "パートナー向け",
      "footer_hotels": "ホテル向け",
      "footer_local_business": "地域ビジネス向け",
      "footer_organizations": "組織向け",
      "footer_studio": "Partner Studio",
      "footer_message": "SomaVioは既存システムを補完します。PMS、OTA、緊急手順を置き換えるものではありません。",
      "footer_legal": "法務",
      "footer_privacy": "プライバシーポリシー",
      "footer_terms": "利用規約",
      "footer_contact": "お問い合わせ",
      "safety_hero_title": "ロッキーを読む<br><em>出発前に。</em>",
      "emergency_text": "緊急時はすぐに<strong>911</strong>へ電話してください。公園内の緊急時は、掲示された指示に従い、必要に応じて公式ディスパッチへ連絡してください。",
      "safety_guest_return_label": "ゲスト安全ビュー",
      "safety_guest_return_title": "ホテルのGuest Hubから安全情報を表示しています。",
      "safety_guest_return_copy": "いつでもザ・アルパインホテルのダッシュボードへ戻れます。",
      "safety_guest_return_cta": "Guest Hubへ戻る →",
      "language_english": "English",
      "language_japanese": "日本語"
}
  }
};


  function normalizeLang(value) {
    const lang = String(value || DEFAULT_LANG).toLowerCase().split('-')[0];
    return SUPPORTED_LANGUAGES.includes(lang) ? lang : DEFAULT_LANG;
  }

  function getStoredLang() {
    try {
      return normalizeLang(localStorage.getItem('sv_lang'));
    } catch (_) {
      return DEFAULT_LANG;
    }
  }

  function storeLang(lang) {
    try {
      localStorage.setItem('sv_lang', normalizeLang(lang));
    } catch (_) {}
  }

  function chevronIcon() {
    return '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>';
  }

  function updateLanguageControls(lang) {
    const activeLang = normalizeLang(lang);
    const toggle = document.getElementById('lang-toggle');

    document.documentElement.lang = activeLang;

    document.querySelectorAll('.lang-option, .drawer-lang-btn').forEach((button) => {
      button.classList.toggle('active', normalizeLang(button.dataset.lang) === activeLang);
    });

    if (toggle) {
      toggle.innerHTML = `${LANGUAGE_LABELS[activeLang]} ${chevronIcon()}`;
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', `Current language: ${LANGUAGE_LABELS[activeLang]}`);
    }
  }

  function applyLanguage(lang) {
    const activeLang = normalizeLang(lang);
    const pageKey = document.documentElement.dataset.svPage || document.body?.dataset.svPage || 'index';
    const baseDictionary = TRANSLATIONS[activeLang] || TRANSLATIONS[DEFAULT_LANG];
    const pageDictionary = PAGE_TRANSLATIONS[pageKey]?.[activeLang] || PAGE_TRANSLATIONS[pageKey]?.[DEFAULT_LANG] || {};
    const dictionary = { ...baseDictionary, ...pageDictionary };

    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.getAttribute('data-i18n');
      if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
        element.textContent = dictionary[key];
      }
    });

    document.querySelectorAll('[data-i18n-html]').forEach((element) => {
      const key = element.getAttribute('data-i18n-html');
      if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
        element.innerHTML = dictionary[key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
      const key = element.getAttribute('data-i18n-placeholder');
      if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
        element.setAttribute('placeholder', dictionary[key]);
      }
    });

    storeLang(activeLang);
    updateLanguageControls(activeLang);

    document.dispatchEvent(new CustomEvent('somavio:languagechange', {
      detail: { lang: activeLang }
    }));
  }

  function bindLanguageMenu() {
    const toggle = document.getElementById('lang-toggle');
    const dropdown = document.getElementById('lang-dropdown');

    if (toggle && dropdown) {
      toggle.addEventListener('click', (event) => {
        event.stopPropagation();
        const isOpen = dropdown.classList.toggle('open');
        toggle.setAttribute('aria-expanded', String(isOpen));
      });

      dropdown.addEventListener('click', (event) => {
        event.stopPropagation();
      });

      document.addEventListener('click', () => {
        dropdown.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    }

    document.querySelectorAll('.lang-option, .drawer-lang-btn').forEach((button) => {
      button.addEventListener('click', () => {
        applyLanguage(button.dataset.lang);

        if (dropdown && toggle) {
          dropdown.classList.remove('open');
          toggle.setAttribute('aria-expanded', 'false');
        }

        if (button.classList.contains('drawer-lang-btn')) {
          closeDrawer();
        }
      });
    });
  }

  function openDrawer() {
    document.getElementById('drawer')?.classList.add('open');
    document.getElementById('drawer-overlay')?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    document.getElementById('drawer')?.classList.remove('open');
    document.getElementById('drawer-overlay')?.classList.remove('open');
    document.body.style.overflow = '';
  }

  function bindDrawer() {
    document.querySelector('.hamburger-btn')?.addEventListener('click', openDrawer);
    document.querySelector('.drawer-close')?.addEventListener('click', closeDrawer);
    document.getElementById('drawer-overlay')?.addEventListener('click', closeDrawer);
  }

  function openWildlifeModal() {
    const modal = document.getElementById('wildlife-modal');
    if (!modal) return;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  function closeWildlifeModal() {
    const modal = document.getElementById('wildlife-modal');
    if (!modal) return;

    modal.style.display = 'none';
    document.body.style.overflow = '';
  }

  function bindWildlifeModal() {
    document.querySelector('.safety-action-btn')?.addEventListener('click', openWildlifeModal);
    document.querySelector('.wm-close')?.addEventListener('click', closeWildlifeModal);

    const overlay = document.querySelector('.wildlife-modal-overlay');
    const modalBox = document.querySelector('.wildlife-modal');

    overlay?.addEventListener('click', closeWildlifeModal);
    modalBox?.addEventListener('click', (event) => event.stopPropagation());

    document.querySelectorAll('.wm-btn-ghost').forEach((link) => {
      link.addEventListener('click', closeWildlifeModal);
    });
  }


  function closeGearModals() {
    document.querySelectorAll('.gear-modal-overlay.open').forEach((modal) => {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
    });
    if (!document.querySelector('.drawer.open')) {
      document.body.style.overflow = '';
    }
  }

  function openGearModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function bindGearModals() {
    document.querySelectorAll('.modal-trigger[data-modal]').forEach((button) => {
      button.addEventListener('click', () => {
        openGearModal(`modal-${button.dataset.modal}`);
      });
    });

    document.querySelectorAll('[data-close-modal]').forEach((button) => {
      button.addEventListener('click', closeGearModals);
    });

    document.querySelectorAll('.gear-modal-overlay').forEach((overlay) => {
      overlay.addEventListener('click', (event) => {
        if (event.target === overlay) closeGearModals();
      });
    });

    document.querySelectorAll('.gear-modal').forEach((modal) => {
      modal.addEventListener('click', (event) => event.stopPropagation());
    });
  }

  function bindSafetyGuestContext() {
    const pageKey = document.documentElement.dataset.svPage || document.body?.dataset.svPage || '';
    if (pageKey !== 'safety') return;

    const params = new URLSearchParams(window.location.search);
    const fromGuestHub = params.get('from') === 'guesthub';

    if (fromGuestHub) {
      try {
        sessionStorage.setItem('sv_safety_return_context', 'guesthub');
      } catch (_) {}
    }

    let storedContext = '';
    try {
      storedContext = sessionStorage.getItem('sv_safety_return_context') || '';
    } catch (_) {}

    if (fromGuestHub || storedContext === 'guesthub') {
      document.body.classList.add('is-guesthub-context');
    }
  }


  function bindTabs() {
    document.querySelectorAll('.tab').forEach((tab) => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach((item) => {
          item.classList.remove('active');
          item.setAttribute('aria-selected', 'false');
        });

        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
      });
    });
  }

  function bindEscapeKey() {
    document.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape') return;

      closeWildlifeModal();
      closeGearModals();
      closeDrawer();

      document.getElementById('lang-dropdown')?.classList.remove('open');
      document.getElementById('lang-toggle')?.setAttribute('aria-expanded', 'false');
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    bindLanguageMenu();
    bindDrawer();
    bindWildlifeModal();
    bindGearModals();
    bindSafetyGuestContext();
    bindTabs();
    bindEscapeKey();
    applyLanguage(getStoredLang());
  });

  window.SomaVioLanguage = {
    supported: SUPPORTED_LANGUAGES.slice(),
    current: getStoredLang,
    apply: applyLanguage
  };
})();
