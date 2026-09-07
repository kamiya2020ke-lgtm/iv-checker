// movesets.js
// 各ポケモンのPvP（GOバトルリーグ）推奨技構成データとタイプ定義

const TYPE_DATA = {
  steel: {
    name: "はがね",
    color: "#5B96A0",
    icon: '<svg viewBox="0 0 24 24" width="14" height="14" fill="white"><path d="M12 2l8 4.6v9.2L12 20.4l-8-4.6V6.6L12 2zm0 3.2L6 8.3v7.4l6 3.5 6-3.5V8.3L12 5.2z"/><circle cx="12" cy="12" r="3" fill="white"/></svg>'
  },
  water: {
    name: "みず",
    color: "#3192F4",
    icon: '<svg viewBox="0 0 24 24" width="14" height="14" fill="white"><path d="M12 2.7c-.5.8-6.5 9-6.5 13.1 0 3.6 2.9 6.5 6.5 6.5s6.5-2.9 6.5-6.5C18.5 11.7 12.5 3.5 12 2.7zm-2.2 12.8c0-.6.5-1.1 1.1-1.1.6 0 1.1.5 1.1 1.1 0 1.2-1 2.2-2.2 2.2-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1z"/></svg>'
  },
  flying: {
    name: "ひこう",
    color: "#7EACEE",
    icon: '<svg viewBox="0 0 24 24" width="14" height="14" fill="white"><path d="M21.5 6.5c-4.5.3-9 2.5-12.5 6.5L3 13c3 1.5 6.5 2.5 10 2 2.5-.3 5-1.5 7-3.5.8-.8 1.5-2.5 1.5-5zM4 17.5c2.5.5 5.5 0 8-1.5L8 15c-1.5.8-3 1.8-4 2.5z"/></svg>'
  },
  fire: {
    name: "ほのお",
    color: "#F65D34",
    icon: '<svg viewBox="0 0 24 24" width="14" height="14" fill="white"><path d="M12 2c-.4 2.4-2.5 4.5-4 6.5-2 2.6-3 5.4-3 8.3C5 20.4 8.1 22 12 22s7-1.6 7-5.2c0-3.5-2.4-6.8-4.5-9.3-.9-1.1-1.8-2.3-2.5-3.5-.2 1.5-.8 2.8-2 3.8 0-2.4 1.2-4.2 2-5.8z"/></svg>'
  },
  grass: {
    name: "くさ",
    color: "#4CAE4F",
    icon: '<svg viewBox="0 0 24 24" width="14" height="14" fill="white"><path d="M20.5 3.5C12.5 3.5 5 8.5 5 16.5c0 2.2.9 4.3 2.5 4.3 7 0 13-7.5 13-17.3zM15 15.5c-2.5 1.5-5 2-7.5 1.5 2.5-2.5 5.5-4.5 9-5.5-1 2.2-1.5 4-1.5 4z"/></svg>'
  },
  electric: {
    name: "でんき",
    color: "#F6B819",
    icon: '<svg viewBox="0 0 24 24" width="14" height="14" fill="white"><path d="M13 2L4 13.5h6.5L9 22l11-12.5h-7L13 2z"/></svg>'
  },
  ice: {
    name: "こおり",
    color: "#30C6E8",
    icon: '<svg viewBox="0 0 24 24" width="14" height="14" fill="white"><path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" stroke="white" stroke-width="2.5" stroke-linecap="round"/><circle cx="12" cy="12" r="2.5" fill="white"/></svg>'
  },
  fighting: {
    name: "かくとう",
    color: "#D84333",
    icon: '<svg viewBox="0 0 24 24" width="14" height="14" fill="white"><path d="M19.5 8.5c-.8 0-1.5.7-1.5 1.5v-1c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5V7c0-.8-.7-1.5-1.5-1.5S12 6.2 12 7v2.5c0-.8-.7-1.5-1.5-1.5S9 8.7 9 9.5v5.5c0 4 3 6.5 6.5 6.5s6.5-2.5 6.5-6.5v-5c0-.8-.7-1.5-1.5-1.5z"/></svg>'
  },
  poison: {
    name: "どく",
    color: "#9C42BD",
    icon: '<svg viewBox="0 0 24 24" width="14" height="14" fill="white"><path d="M12 2a6 6 0 00-6 6c0 2.5 1.5 4.5 3.5 5.5v3.5h5V13.5c2-1 3.5-3 3.5-5.5a6 6 0 00-6-6zm-2.5 6a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm-4.5 9h4v2h-4v-2z"/></svg>'
  },
  ground: {
    name: "じめん",
    color: "#A2744B",
    icon: '<svg viewBox="0 0 24 24" width="14" height="14" fill="white"><path d="M3 18l5-8 4 6 5-9 4 11H3zm6.5-1.5l-2.5-4-2 4h4.5z"/></svg>'
  },
  psychic: {
    name: "エスパー",
    color: "#EC4884",
    icon: '<svg viewBox="0 0 24 24" width="14" height="14" fill="white"><circle cx="12" cy="12" r="9" stroke="white" stroke-width="2" fill="none"/><circle cx="12" cy="12" r="4" fill="white"/></svg>'
  },
  bug: {
    name: "むし",
    color: "#88B926",
    icon: '<svg viewBox="0 0 24 24" width="14" height="14" fill="white"><circle cx="12" cy="7" r="3.5" fill="white"/><path d="M12 11c-3.5 0-6 3-6 7.5 0 2 2.5 3.5 6 3.5s6-1.5 6-3.5c0-4.5-2.5-7.5-6-7.5zm-5-3.5L4 5M17 7.5L20 5M4 14h3M17 14h3" stroke="white" stroke-width="1.8" stroke-linecap="round"/></svg>'
  },
  rock: {
    name: "いわ",
    color: "#A69264",
    icon: '<svg viewBox="0 0 24 24" width="14" height="14" fill="white"><path d="M12 3l7 5-2 11-10 2-4-8 4-8 5-2z"/></svg>'
  },
  ghost: {
    name: "ゴースト",
    color: "#6B549B",
    icon: '<svg viewBox="0 0 24 24" width="14" height="14" fill="white"><path d="M12 3c-5 0-8 4-8 9v8.5l3-2.5 3 2.5 2-2.5 2 2.5 3-2.5 3 2.5V12c0-5-3-9-8-9zm-3.5 8a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm7 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"/></svg>'
  },
  dragon: {
    name: "ドラゴン",
    color: "#5262E2",
    icon: '<svg viewBox="0 0 24 24" width="14" height="14" fill="white"><path d="M21 4c-5 0-9 3-12 7L6 9l-4 3 5 4-3 5 7-2 4 3 1-5c3-3 5-8 5-13z"/></svg>'
  },
  dark: {
    name: "あく",
    color: "#4B4442",
    icon: '<svg viewBox="0 0 24 24" width="14" height="14" fill="white"><path d="M19.5 14c-1 4.5-5 8-10 8-6 0-11-5-11-11 0-5 3.5-9 8-10-.5 1.5-.5 3.5 0 5 1.2 3.8 5 6.8 9 7.5 1.5.2 3 .5 4 .5z"/></svg>'
  },
  normal: {
    name: "ノーマル",
    color: "#9A9A90",
    icon: '<svg viewBox="0 0 24 24" width="14" height="14" fill="white"><circle cx="12" cy="12" r="8" stroke="white" stroke-width="2.5" fill="none"/></svg>'
  },
  fairy: {
    name: "フェアリー",
    color: "#E867B4",
    icon: '<svg viewBox="0 0 24 24" width="14" height="14" fill="white"><path d="M12 2l2.5 6.5L21 11l-5.5 4.5L17 22l-5-4-5 4 1.5-6.5L3 11l6.5-2.5L12 2z"/></svg>'
  }
};

const MOVESETS = {

  "フシギバナ": {
    fast: [{"name": "つるのムチ", "type": "grass"}],
    charged: [{"name": "ハードプラント", "type": "grass", "legacy": true}, {"name": "ヘドロばくだん", "type": "poison"}],
    nonLegacy: {
      fast: [{"name": "つるのムチ", "type": "grass"}],
      charged: [{"name": "ヘドロばくだん", "type": "poison"}, {"name": "ソーラービーム", "type": "grass"}]
    }
  },
  "リザードン": {
    fast: [{"name": "つばさでうつ", "type": "flying", "legacy": true}],
    charged: [{"name": "ブラストバーン", "type": "fire", "legacy": true}, {"name": "ドラゴンクロー", "type": "dragon"}],
    nonLegacy: {
      fast: [{"name": "ほのおのうず", "type": "fire"}],
      charged: [{"name": "ドラゴンクロー", "type": "dragon"}, {"name": "オーバーヒート", "type": "fire"}]
    }
  },
  "カメックス": {
    fast: [{"name": "みずでっぽう", "type": "water"}],
    charged: [{"name": "ハイドロカノン", "type": "water", "legacy": true}, {"name": "れいとうビーム", "type": "ice"}],
    nonLegacy: {
      fast: [{"name": "みずでっぽう", "type": "water"}],
      charged: [{"name": "れいとうビーム", "type": "ice"}, {"name": "ラスターカノン", "type": "steel"}]
    }
  },
  "ピカチュウ": {
    fast: [{"name": "でんきショック", "type": "electric"}],
    charged: [{"name": "10まんボルト", "type": "electric"}, {"name": "なみのり", "type": "water", "legacy": true}],
    nonLegacy: {
      fast: [{"name": "でんきショック", "type": "electric"}],
      charged: [{"name": "10まんボルト", "type": "electric"}, {"name": "かみなりパンチ", "type": "electric"}]
    }
  },
  "アローラキュウコン": {
    fast: [{"name": "こなゆき", "type": "ice"}],
    charged: [{"name": "ウェザーボール", "type": "ice"}, {"name": "マジカルシャイン", "type": "fairy"}]
  },
  "プクリン": {
    fast: [{"name": "あまえる", "type": "fairy"}],
    charged: [{"name": "こごえるかぜ", "type": "ice"}, {"name": "じゃれつく", "type": "fairy"}]
  },
  "ランターン": {
    fast: [{"name": "スパーク", "type": "electric"}],
    charged: [{"name": "なみのり", "type": "water"}, {"name": "10まんボルト", "type": "electric"}]
  },
  "マリルリ": {
    fast: [{"name": "あわ", "type": "water"}],
    charged: [{"name": "れいとうビーム", "type": "ice"}, {"name": "じゃれつく", "type": "fairy"}]
  },
  "ブラッキー": {
    fast: [{"name": "バークアウト", "type": "dark"}],
    charged: [{"name": "イカサマ", "type": "dark"}, {"name": "とっておき", "type": "normal", "legacy": true}],
    nonLegacy: {
      fast: [{"name": "バークアウト", "type": "dark"}],
      charged: [{"name": "イカサマ", "type": "dark"}, {"name": "あくのはどう", "type": "dark"}]
    }
  },
  "エアームド": {
    fast: [{"name": "エアスラッシュ", "type": "flying"}],
    charged: [{"name": "ブレイブバード", "type": "flying"}, {"name": "ゴッドバード", "type": "flying"}]
  },
  "ラグラージ": {
    fast: [{"name": "マッドショット", "type": "ground"}],
    charged: [{"name": "ハイドロカノン", "type": "water", "legacy": true}, {"name": "じしん", "type": "ground"}],
    nonLegacy: {
      fast: [{"name": "マッドショット", "type": "ground"}],
      charged: [{"name": "なみのり", "type": "water"}, {"name": "じしん", "type": "ground"}]
    }
  },
  "ヤルキモノ": {
    fast: [{"name": "カウンター", "type": "fighting"}],
    charged: [{"name": "のしかかり", "type": "normal"}, {"name": "じならし", "type": "ground"}]
  },
  "ヤミラミ": {
    fast: [{"name": "シャドークロー", "type": "ghost"}],
    charged: [{"name": "イカサマ", "type": "dark"}, {"name": "おんがえし", "type": "normal", "legacy": true}],
    nonLegacy: {
      fast: [{"name": "シャドークロー", "type": "ghost"}],
      charged: [{"name": "イカサマ", "type": "dark"}, {"name": "パワージェム", "type": "rock"}]
    }
  },
  "チャーレム": {
    fast: [{"name": "カウンター", "type": "fighting"}],
    charged: [{"name": "れいとうパンチ", "type": "ice"}, {"name": "サイコキネシス", "type": "psychic"}]
  },
  "チルタリス": {
    fast: [{"name": "りゅうのいぶき", "type": "dragon"}],
    charged: [{"name": "ゴッドバード", "type": "flying"}, {"name": "ムーンフォース", "type": "fairy", "legacy": true}],
    nonLegacy: {
      fast: [{"name": "りゅうのいぶき", "type": "dragon"}],
      charged: [{"name": "ゴッドバード", "type": "flying"}, {"name": "りゅうのはどう", "type": "dragon"}]
    }
  },
  "ナマズン": {
    fast: [{"name": "マッドショット", "type": "ground"}],
    charged: [{"name": "どろばくだん", "type": "ground"}, {"name": "ねっとう", "type": "water"}]
  },
  "デオキシス(D)": {
    fast: [{"name": "カウンター", "type": "fighting"}],
    charged: [{"name": "サイコブースト", "type": "psychic"}, {"name": "10まんボルト", "type": "electric"}]
  },
  "トリデプス": {
    fast: [{"name": "うちおとす", "type": "rock"}],
    charged: [{"name": "ストーンエッジ", "type": "rock"}, {"name": "かえんほうしゃ", "type": "fire"}]
  },
  "ドラピオン": {
    fast: [{"name": "どくばり", "type": "poison"}],
    charged: [{"name": "アクアテール", "type": "water", "legacy": true}, {"name": "かみくだく", "type": "dark"}],
    nonLegacy: {
      fast: [{"name": "どくばり", "type": "poison"}],
      charged: [{"name": "かみくだく", "type": "dark"}, {"name": "ヘドロばくだん", "type": "poison"}]
    }
  },
  "ドクロッグ": {
    fast: [{"name": "カウンター", "type": "fighting"}],
    charged: [{"name": "どろばくだん", "type": "ground"}, {"name": "ヘドロばくだん", "type": "poison"}]
  },
  "ユキノオー": {
    fast: [{"name": "こなゆき", "type": "ice"}],
    charged: [{"name": "ウェザーボール", "type": "ice"}, {"name": "エナジーボール", "type": "grass"}]
  },
  "ブルンゲル": {
    fast: [{"name": "たたりめ", "type": "ghost"}],
    charged: [{"name": "なみのり", "type": "water"}, {"name": "シャドーボール", "type": "ghost"}]
  },
  "ガラルマッギョ": {
    fast: [{"name": "マッドショット", "type": "ground"}],
    charged: [{"name": "いわなだれ", "type": "rock"}, {"name": "じしん", "type": "ground"}]
  },
  "マッギョ": {
    fast: [{"name": "でんきショック", "type": "electric"}],
    charged: [{"name": "どろばくだん", "type": "ground"}, {"name": "ほうでん", "type": "electric"}]
  },
  "バルジーナ": {
    fast: [{"name": "バークアウト", "type": "dark"}],
    charged: [{"name": "イカサマ", "type": "dark"}, {"name": "つばめがえし", "type": "flying"}]
  },
  "ファイアロー": {
    fast: [{"name": "やきつくす", "type": "fire", "legacy": true}],
    charged: [{"name": "ブレイブバード", "type": "flying"}, {"name": "ニトロチャージ", "type": "fire"}],
    nonLegacy: {
      fast: [{"name": "はがねのつばさ", "type": "steel"}],
      charged: [{"name": "ブレイブバード", "type": "flying"}, {"name": "ニトロチャージ", "type": "fire"}]
    }
  },
  "オーロット": {
    fast: [{"name": "シャドークロー", "type": "ghost"}],
    charged: [{"name": "たねばくだん", "type": "grass"}, {"name": "シャドーボール", "type": "ghost"}]
  },
  "ドヒドイデ": {
    fast: [{"name": "どくばり", "type": "poison"}],
    charged: [{"name": "なみのり", "type": "water"}, {"name": "ヘドロばくだん", "type": "poison"}]
  },
  "メガニウム": {
    fast: [{"name": "つるのムチ", "type": "grass"}],
    charged: [{"name": "ハードプラント", "type": "grass", "legacy": true}, {"name": "じしん", "type": "ground"}],
    nonLegacy: {
      fast: [{"name": "つるのムチ", "type": "grass"}],
      charged: [{"name": "じしん", "type": "ground"}, {"name": "ソーラービーム", "type": "grass"}]
    }
  },
  "バクフーン": {
    fast: [{"name": "やきつくす", "type": "fire"}],
    charged: [{"name": "ブラストバーン", "type": "fire", "legacy": true}, {"name": "ソーラービーム", "type": "grass"}],
    nonLegacy: {
      fast: [{"name": "やきつくす", "type": "fire"}],
      charged: [{"name": "オーバーヒート", "type": "fire"}, {"name": "ソーラービーム", "type": "grass"}]
    }
  },
  "オーダイル": {
    fast: [{"name": "シャドークロー", "type": "ghost"}],
    charged: [{"name": "ハイドロカノン", "type": "water", "legacy": true}, {"name": "かみくだく", "type": "dark"}],
    nonLegacy: {
      fast: [{"name": "シャドークロー", "type": "ghost"}],
      charged: [{"name": "かみくだく", "type": "dark"}, {"name": "れいとうビーム", "type": "ice"}]
    }
  },
  "ジュカイン": {
    fast: [{"name": "れんぞくぎり", "type": "bug"}],
    charged: [{"name": "ハードプラント", "type": "grass", "legacy": true}, {"name": "ドラゴンクロー", "type": "dragon"}],
    nonLegacy: {
      fast: [{"name": "れんぞくぎり", "type": "bug"}],
      charged: [{"name": "リーフブレード", "type": "grass"}, {"name": "ドラゴンクロー", "type": "dragon"}]
    }
  },
  "バシャーモ": {
    fast: [{"name": "カウンター", "type": "fighting"}],
    charged: [{"name": "ブラストバーン", "type": "fire", "legacy": true}, {"name": "ブレイズキック", "type": "fire"}],
    nonLegacy: {
      fast: [{"name": "カウンター", "type": "fighting"}],
      charged: [{"name": "ブレイズキック", "type": "fire"}, {"name": "ブレイブバード", "type": "flying"}]
    }
  },
  "エンペルト": {
    fast: [{"name": "きんぞくおん", "type": "steel"}],
    charged: [{"name": "ハイドロカノン", "type": "water", "legacy": true}, {"name": "ドリルくちばし", "type": "flying"}],
    nonLegacy: {
      fast: [{"name": "きんぞくおん", "type": "steel"}],
      charged: [{"name": "ドリルくちばし", "type": "flying"}, {"name": "ハイドロポンプ", "type": "water"}]
    }
  },
  "ハハコモリ": {
    fast: [{"name": "はっぱカッター", "type": "grass"}],
    charged: [{"name": "リーフブレード", "type": "grass"}, {"name": "シザークロス", "type": "bug"}]
  },
  "ダイケンキ": {
    fast: [{"name": "たきのぼり", "type": "water"}],
    charged: [{"name": "ハイドロカノン", "type": "water", "legacy": true}, {"name": "メガホーン", "type": "bug"}],
    nonLegacy: {
      fast: [{"name": "たきのぼり", "type": "water"}],
      charged: [{"name": "メガホーン", "type": "bug"}, {"name": "つじぎり", "type": "dark"}]
    }
  },
  "サザンドラ": {
    fast: [{"name": "りゅうのいぶき", "type": "dragon"}],
    charged: [{"name": "ぶんまわす", "type": "dark", "legacy": true}, {"name": "あくのはどう", "type": "dark"}],
    nonLegacy: {
      fast: [{"name": "りゅうのいぶき", "type": "dragon"}],
      charged: [{"name": "あくのはどう", "type": "dark"}, {"name": "りゅうのはどう", "type": "dragon"}]
    }
  },
  "バンギラス": {
    fast: [{"name": "うちおとす", "type": "rock", "legacy": true}],
    charged: [{"name": "ぶんまわす", "type": "dark"}, {"name": "ストーンエッジ", "type": "rock"}],
    nonLegacy: {
      fast: [{"name": "かみつく", "type": "dark"}],
      charged: [{"name": "ぶんまわす", "type": "dark"}, {"name": "ストーンエッジ", "type": "rock"}]
    }
  },
  "ブリガロン": {
    fast: [{"name": "つるのムチ", "type": "grass"}],
    charged: [{"name": "ハードプラント", "type": "grass", "legacy": true}, {"name": "ばかぢから", "type": "fighting"}],
    nonLegacy: {
      fast: [{"name": "つるのムチ", "type": "grass"}],
      charged: [{"name": "ばかぢから", "type": "fighting"}, {"name": "エナジーボール", "type": "grass"}]
    }
  },
  "マフォクシー": {
    fast: [{"name": "ほのおのうず", "type": "fire"}],
    charged: [{"name": "ブラストバーン", "type": "fire", "legacy": true}, {"name": "マジカルシャイン", "type": "fairy"}],
    nonLegacy: {
      fast: [{"name": "ほのおのうず", "type": "fire"}],
      charged: [{"name": "マジカルシャイン", "type": "fairy"}, {"name": "かえんほうしゃ", "type": "fire"}]
    }
  },
  "ゲッコウガ": {
    fast: [{"name": "みずしゅりけん", "type": "water"}],
    charged: [{"name": "ハイドロカノン", "type": "water", "legacy": true}, {"name": "つじぎり", "type": "dark"}],
    nonLegacy: {
      fast: [{"name": "みずしゅりけん", "type": "water"}],
      charged: [{"name": "つじぎり", "type": "dark"}, {"name": "なみのり", "type": "water"}]
    }
  },
  "ジュナイパー": {
    fast: [{"name": "このは", "type": "grass"}],
    charged: [{"name": "ハードプラント", "type": "grass", "legacy": true}, {"name": "ブレイブバード", "type": "flying"}],
    nonLegacy: {
      fast: [{"name": "このは", "type": "grass"}],
      charged: [{"name": "ブレイブバード", "type": "flying"}, {"name": "エナジーボール", "type": "grass"}]
    }
  },
  "アシレーヌ": {
    fast: [{"name": "あまえる", "type": "fairy"}],
    charged: [{"name": "ハイドロカノン", "type": "water", "legacy": true}, {"name": "ムーンフォース", "type": "fairy"}],
    nonLegacy: {
      fast: [{"name": "あまえる", "type": "fairy"}],
      charged: [{"name": "ムーンフォース", "type": "fairy"}, {"name": "ハイドロポンプ", "type": "water"}]
    }
  },
  "アーマーガア": {
    fast: [{"name": "つばさでうつ", "type": "flying"}],
    charged: [{"name": "ブレイブバード", "type": "flying"}, {"name": "ドリルくちばし", "type": "flying"}]
  },
  "ラウドボーン": {
    fast: [{"name": "やきつくす", "type": "fire"}],
    charged: [{"name": "シャドーボール", "type": "ghost"}, {"name": "チャームボイス", "type": "fairy"}]
  },
  "オコリザル": {
    fast: [{"name": "カウンター", "type": "fighting"}],
    charged: [{"name": "つじぎり", "type": "dark"}, {"name": "インファイト", "type": "fighting"}]
  },
  "コノヨザル": {
    fast: [{"name": "カウンター", "type": "fighting"}],
    charged: [{"name": "シャドーボール", "type": "ghost"}, {"name": "インファイト", "type": "fighting"}]
  },
  "メタグロス": {
    fast: [{"name": "バレットパンチ", "type": "steel"}],
    charged: [{"name": "コメットパンチ", "type": "steel", "legacy": true}, {"name": "じしん", "type": "ground"}],
    nonLegacy: {
      fast: [{"name": "バレットパンチ", "type": "steel"}],
      charged: [{"name": "ラスターカノン", "type": "steel"}, {"name": "じしん", "type": "ground"}]
    }
  },
  "レジスチル": {
    fast: [{"name": "ロックオン", "type": "normal"}],
    charged: [{"name": "でんじほう", "type": "electric", "legacy": true}, {"name": "きあいだま", "type": "fighting"}],
    nonLegacy: {
      fast: [{"name": "ロックオン", "type": "normal"}],
      charged: [{"name": "ラスターカノン", "type": "steel"}, {"name": "きあいだま", "type": "fighting"}]
    }
  },
  "カイリュー": {
    fast: [{"name": "りゅうのいぶき", "type": "dragon"}],
    charged: [{"name": "ドラゴンクロー", "type": "dragon"}, {"name": "ばかぢから", "type": "fighting"}]
  },
  "ガブリアス": {
    fast: [{"name": "マッドショット", "type": "ground"}],
    charged: [{"name": "だいちのちから", "type": "ground", "legacy": true}, {"name": "すなじごく", "type": "ground"}],
    nonLegacy: {
      fast: [{"name": "マッドショット", "type": "ground"}],
      charged: [{"name": "じしん", "type": "ground"}, {"name": "げきりん", "type": "dragon"}]
    }
  },
  "ベロベルト": {
    fast: [{"name": "したでなめる", "type": "ghost"}],
    charged: [{"name": "のしかかり", "type": "normal", "legacy": true}, {"name": "シャドーボール", "type": "ghost"}],
    nonLegacy: {
      fast: [{"name": "したでなめる", "type": "ghost"}],
      charged: [{"name": "シャドーボール", "type": "ghost"}, {"name": "じしん", "type": "ground"}]
    }
  },
  "オオタチ": {
    fast: [{"name": "でんこうせっか", "type": "normal"}],
    charged: [{"name": "のしかかり", "type": "normal"}, {"name": "はかいこうせん", "type": "normal"}]
  },
  "フラージェス": {
    fast: [{"name": "ようせいのかぜ", "type": "fairy"}],
    charged: [{"name": "ムーンフォース", "type": "fairy"}, {"name": "マジカルシャイン", "type": "fairy"}]
  },
  "フォレトス": {
    fast: [{"name": "むしくい", "type": "bug"}],
    charged: [{"name": "じしん", "type": "ground"}, {"name": "がんせきふうじ", "type": "rock"}]
  },
  "コモルー": {
    fast: [{"name": "りゅうのいぶき", "type": "dragon"}],
    charged: [{"name": "のしかかり", "type": "normal"}, {"name": "かえんほうしゃ", "type": "fire"}]
  },
  "ガラルサニーゴ": {
    fast: [{"name": "おどろかす", "type": "ghost"}],
    charged: [{"name": "ナイトヘッド", "type": "ghost"}, {"name": "パワージェム", "type": "rock"}]
  },
  "ビリジオン": {
    fast: [{"name": "にどげり", "type": "fighting"}],
    charged: [{"name": "リーフブレード", "type": "grass"}, {"name": "せいなるつるぎ", "type": "fighting", "legacy": true}],
    nonLegacy: {
      fast: [{"name": "にどげり", "type": "fighting"}],
      charged: [{"name": "リーフブレード", "type": "grass"}, {"name": "インファイト", "type": "fighting"}]
    }
  },
  "ガラルマタドガス": {
    fast: [{"name": "ようせいのかぜ", "type": "fairy"}],
    charged: [{"name": "ヘドロばくだん", "type": "poison"}, {"name": "オーバーヒート", "type": "fire"}]
  },
  "ドククラゲ": {
    fast: [{"name": "どくづき", "type": "poison"}],
    charged: [{"name": "ねっとう", "type": "water"}, {"name": "アシッドボム", "type": "poison"}]
  },
  "ジガルデ(100%)": {
    fast: [{"name": "りゅうのいぶき", "type": "dragon"}],
    charged: [{"name": "じしん", "type": "ground"}, {"name": "かみくだく", "type": "dark"}]
  },
  "ガラルファイヤー": {
    fast: [{"name": "つばさでうつ", "type": "flying"}],
    charged: [{"name": "げんしのちから", "type": "rock"}, {"name": "ブレイブバード", "type": "flying"}]
  },
  "デンリュウ": {
    fast: [{"name": "ボルトチェンジ", "type": "electric"}],
    charged: [{"name": "かみなりパンチ", "type": "electric"}, {"name": "きあいだま", "type": "fighting"}]
  },
  "アクジキング": {
    fast: [{"name": "りゅうのいぶき", "type": "dragon"}],
    charged: [{"name": "ドラゴンクロー", "type": "dragon"}, {"name": "ぶんまわす", "type": "dark"}]
  },
  "ワタッコ": {
    fast: [{"name": "ようせいのかぜ", "type": "fairy"}],
    charged: [{"name": "アクロバット", "type": "flying", "legacy": true}, {"name": "エナジーボール", "type": "grass"}],
    nonLegacy: {
      fast: [{"name": "ようせいのかぜ", "type": "fairy"}],
      charged: [{"name": "エナジーボール", "type": "grass"}, {"name": "マジカルシャイン", "type": "fairy"}]
    }
  },
  "キングドラ": {
    fast: [{"name": "りゅうのいぶき", "type": "dragon"}],
    charged: [{"name": "オクトパズーカ", "type": "water"}, {"name": "げきりん", "type": "dragon"}]
  },
  "ホルード": {
    fast: [{"name": "マッドショット", "type": "ground"}],
    charged: [{"name": "ほのおのパンチ", "type": "fire"}, {"name": "じしん", "type": "ground"}]
  },
  "カラマネロ": {
    fast: [{"name": "サイコカッター", "type": "psychic"}],
    charged: [{"name": "イカサマ", "type": "dark"}, {"name": "ばかぢから", "type": "fighting"}]
  },
  "デンジムシ": {
    fast: [{"name": "ボルトチェンジ", "type": "electric", "legacy": true}],
    charged: [{"name": "シザークロス", "type": "bug"}, {"name": "ほうでん", "type": "electric"}],
    nonLegacy: {
      fast: [{"name": "スパーク", "type": "electric"}],
      charged: [{"name": "シザークロス", "type": "bug"}, {"name": "ほうでん", "type": "electric"}]
    }
  },
  "フォクスライ": {
    fast: [{"name": "バークアウト", "type": "dark"}],
    charged: [{"name": "あくのはどう", "type": "dark"}, {"name": "イカサマ", "type": "dark"}]
  },
  "ドオー": {
    fast: [{"name": "どくづき", "type": "poison"}],
    charged: [{"name": "じしん", "type": "ground"}, {"name": "ヘドロばくだん", "type": "poison"}]
  },
  "アローラサンドパン": {
    fast: [{"name": "シャドークロー", "type": "ghost", "legacy": true}],
    charged: [{"name": "れいとうパンチ", "type": "ice"}, {"name": "ドリルライナー", "type": "ground"}],
    nonLegacy: {
      fast: [{"name": "こなゆき", "type": "ice"}],
      charged: [{"name": "れいとうパンチ", "type": "ice"}, {"name": "ドリルライナー", "type": "ground"}]
    }
  },
  "アズマオウ": {
    fast: [{"name": "どくづき", "type": "poison", "legacy": true}],
    charged: [{"name": "こごえるかぜ", "type": "ice", "legacy": true}, {"name": "ドリルライナー", "type": "ground", "legacy": true}],
    nonLegacy: {
      fast: [{"name": "たきのぼり", "type": "water"}],
      charged: [{"name": "なみのり", "type": "water"}, {"name": "メガホーン", "type": "bug"}]
    }
  },
  "ヌオー": {
    fast: [{"name": "マッドショット", "type": "ground"}],
    charged: [{"name": "アクアテール", "type": "water", "legacy": true}, {"name": "ストーンエッジ", "type": "rock"}],
    nonLegacy: {
      fast: [{"name": "マッドショット", "type": "ground"}],
      charged: [{"name": "どろばくだん", "type": "ground"}, {"name": "ストーンエッジ", "type": "rock"}]
    }
  },
  "ノココッチ": {
    fast: [{"name": "ころがる", "type": "rock"}],
    charged: [{"name": "ドリルライナー", "type": "ground"}, {"name": "のしかかり", "type": "normal"}]
  },
  "ハリーセン": {
    fast: [{"name": "どくばり", "type": "poison"}],
    charged: [{"name": "アクアテール", "type": "water"}, {"name": "ヘドロばくだん", "type": "poison"}]
  },
  "グラエナ": {
    fast: [{"name": "かみつく", "type": "dark"}],
    charged: [{"name": "かみくだく", "type": "dark"}, {"name": "どくどくのキバ", "type": "poison"}]
  },
  "ブーピッグ": {
    fast: [{"name": "サイコカッター", "type": "psychic"}],
    charged: [{"name": "サイコキネシス", "type": "psychic"}, {"name": "シャドーボール", "type": "ghost"}]
  },
  "トドゼルガ": {
    fast: [{"name": "こなゆき", "type": "ice", "legacy": true}],
    charged: [{"name": "つららばり", "type": "ice", "legacy": true}, {"name": "じしん", "type": "ground", "legacy": true}],
    nonLegacy: {
      fast: [{"name": "たきのぼり", "type": "water"}],
      charged: [{"name": "ふぶき", "type": "ice"}, {"name": "みずのはどう", "type": "water"}]
    }
  },
  "トリトドン": {
    fast: [{"name": "どろかけ", "type": "ground"}],
    charged: [{"name": "のしかかり", "type": "normal"}, {"name": "だいちのちから", "type": "ground"}]
  },
  "ギルガルド": {
    fast: [{"name": "れんぞくぎり", "type": "bug"}],
    charged: [{"name": "シャドーボール", "type": "ghost"}, {"name": "アイアンヘッド", "type": "steel"}]
  },
  "ミミッキュ": {
    fast: [{"name": "シャドークロー", "type": "ghost"}],
    charged: [{"name": "シャドーボール", "type": "ghost"}, {"name": "じゃれつく", "type": "fairy"}]
  },
  "ウッウ": {
    fast: [{"name": "つばさでうつ", "type": "flying"}],
    charged: [{"name": "ブレイブバード", "type": "flying"}, {"name": "なみのり", "type": "water"}]
  },
  "モルペコ": {
    fast: [{"name": "でんきショック", "type": "electric"}],
    charged: [{"name": "オーラぐるま", "type": "electric"}, {"name": "かみくだく", "type": "dark"}]
  },
  "シャドウオーダイル": {
    fast: [{"name": "シャドークロー", "type": "ghost"}],
    charged: [{"name": "ハイドロカノン", "type": "water", "legacy": true}, {"name": "こごえるかぜ", "type": "ice"}]
  },
  "シャドウフォレトス": {
    fast: [{"name": "むしくい", "type": "bug", "legacy": true}],
    charged: [{"name": "じしん", "type": "ground"}, {"name": "がんせきふうじ", "type": "rock"}]
  },
  "シャドウコノヨザル": {
    fast: [{"name": "カウンター", "type": "fighting"}],
    charged: [{"name": "つじぎり", "type": "dark"}, {"name": "シャドーボール", "type": "ghost"}]
  },
  "シャドウアローラサンドパン": {
    fast: [{"name": "シャドークロー", "type": "ghost", "legacy": true}],
    charged: [{"name": "れいとうパンチ", "type": "ice"}, {"name": "ドリルライナー", "type": "ground"}],
    nonLegacy: {
      fast: [{"name": "こなゆき", "type": "ice"}],
      charged: [{"name": "れいとうパンチ", "type": "ice"}, {"name": "ドリルライナー", "type": "ground"}]
    }
  },
  "シャドウヌオー": {
    fast: [{"name": "マッドショット", "type": "ground"}],
    charged: [{"name": "アクアテール", "type": "water", "legacy": true}, {"name": "ストーンエッジ", "type": "rock"}],
    nonLegacy: {
      fast: [{"name": "マッドショット", "type": "ground"}],
      charged: [{"name": "どろばくだん", "type": "ground"}, {"name": "ストーンエッジ", "type": "rock"}]
    }
  },
  "シャドウハリーセン": {
    fast: [{"name": "どくばり", "type": "poison"}],
    charged: [{"name": "アクアテール", "type": "water"}, {"name": "ヘドロばくだん", "type": "poison"}]
  },
  "シャドウグラエナ": {
    fast: [{"name": "かみつく", "type": "dark"}],
    charged: [{"name": "かみくだく", "type": "dark"}, {"name": "どくどくのキバ", "type": "poison"}]
  },
  "シャドウヤミラミ": {
    fast: [{"name": "シャドークロー", "type": "ghost"}],
    charged: [{"name": "イカサマ", "type": "dark"}, {"name": "パワージェム", "type": "rock"}]
  },
  "シャドウトドゼルガ": {
    fast: [{"name": "こなゆき", "type": "ice", "legacy": true}],
    charged: [{"name": "つららばり", "type": "ice", "legacy": true}, {"name": "じしん", "type": "ground", "legacy": true}],
    nonLegacy: {
      fast: [{"name": "たきのぼり", "type": "water"}],
      charged: [{"name": "ふぶき", "type": "ice"}, {"name": "みずのはどう", "type": "water"}]
    }
  },
  "ミュウツー": {
    fast: [{"name": "サイコカッター", "type": "psychic"}],
    charged: [{"name": "サイコブレイク", "type": "psychic", "legacy": true}, {"name": "シャドーボール", "type": "ghost", "legacy": true}],
    nonLegacy: {
      fast: [{"name": "サイコカッター", "type": "psychic"}],
      charged: [{"name": "きあいだま", "type": "fighting"}, {"name": "れいとうビーム", "type": "ice"}]
    }
  },
  "シャドウミュウツー": {
    fast: [{"name": "サイコカッター", "type": "psychic"}],
    charged: [{"name": "サイコブレイク", "type": "psychic", "legacy": true}, {"name": "シャドーボール", "type": "ghost", "legacy": true}],
    nonLegacy: {
      fast: [{"name": "サイコカッター", "type": "psychic"}],
      charged: [{"name": "きあいだま", "type": "fighting"}, {"name": "れいとうビーム", "type": "ice"}]
    }
  },
  "ヨクバリス": {
    fast: [{"name": "マッドショット", "type": "ground"}],
    charged: [{"name": "のしかかり", "type": "normal"}, {"name": "かみくだく", "type": "dark"}]
  },
  "バタフリー": {
    fast: [{"name": "ねんりき", "type": "psychic"}],
    charged: [{"name": "むしのさざめき", "type": "bug"}, {"name": "シグナルビーム", "type": "bug"}]
  },
  "スピアー": {
    fast: [{"name": "どくばり", "type": "poison"}],
    charged: [{"name": "シザークロス", "type": "bug"}, {"name": "ドリルライナー", "type": "ground", "legacy": true}]
  },
  "ピジョット": {
    fast: [{"name": "かぜおこし", "type": "flying", "legacy": true}],
    charged: [{"name": "エアカッター", "type": "flying", "legacy": true}, {"name": "ブレイブバード", "type": "flying"}]
  },
  "ラッタ": {
    fast: [{"name": "でんこうせっか", "type": "normal"}],
    charged: [{"name": "ひっさつまえば", "type": "normal"}, {"name": "あなをほる", "type": "ground"}]
  },
  "アローララッタ": {
    fast: [{"name": "でんこうせっか", "type": "normal"}],
    charged: [{"name": "かみくだく", "type": "dark"}, {"name": "おんがえし", "type": "normal"}]
  },
  "オニドリル": {
    fast: [{"name": "つつく", "type": "flying"}],
    charged: [{"name": "ドリルくちばし", "type": "flying"}, {"name": "ドリルライナー", "type": "ground"}]
  },
  "アーボック": {
    fast: [{"name": "ようかいえき", "type": "poison"}],
    charged: [{"name": "あくのはどう", "type": "dark"}, {"name": "ヘドロウェーブ", "type": "poison"}]
  },
  "ライチュウ": {
    fast: [{"name": "でんきショック", "type": "electric"}],
    charged: [{"name": "ワイルドボルト", "type": "electric"}, {"name": "くさわけ", "type": "grass"}]
  },
  "アローラライチュウ": {
    fast: [{"name": "でんきショック", "type": "electric"}],
    charged: [{"name": "ワイルドボルト", "type": "electric"}, {"name": "くさわけ", "type": "grass"}]
  },
  "サンドパン": {
    fast: [{"name": "すなかけ", "type": "ground"}],
    charged: [{"name": "つじぎり", "type": "dark", "legacy": true}, {"name": "ねっさのだいち", "type": "ground"}]
  },
  "ニドクイン": {
    fast: [{"name": "どろかけ", "type": "ground"}],
    charged: [{"name": "だいちのちから", "type": "ground"}, {"name": "どくどくのキバ", "type": "poison"}]
  },
  "ニドキング": {
    fast: [{"name": "れんぞくぎり", "type": "bug", "legacy": true}],
    charged: [{"name": "すなじごく", "type": "ground"}, {"name": "だいちのちから", "type": "ground"}]
  },
  "ピクシー": {
    fast: [{"name": "ようせいのかぜ", "type": "fairy"}],
    charged: [{"name": "ムーンフォース", "type": "fairy"}, {"name": "コメットパンチ", "type": "steel"}]
  },
  "キュウコン": {
    fast: [{"name": "ひのこ", "type": "fire", "legacy": true}],
    charged: [{"name": "ウェザーボール", "type": "fire"}, {"name": "エナジーボール", "type": "grass", "legacy": true}]
  },
  "ラフレシア": {
    fast: [{"name": "ようかいえき", "type": "poison"}],
    charged: [{"name": "ヘドロばくだん", "type": "poison"}, {"name": "はなふぶき", "type": "grass"}]
  },
  "パラセクト": {
    fast: [{"name": "れんぞくぎり", "type": "bug"}],
    charged: [{"name": "シザークロス", "type": "bug"}, {"name": "クロスポイズン", "type": "poison"}]
  },
  "モルフォン": {
    fast: [{"name": "サイコウェーブ", "type": "psychic"}],
    charged: [{"name": "どくどくのキバ", "type": "poison"}, {"name": "ぎんいろのかぜ", "type": "bug"}]
  },
  "ダグトリオ": {
    fast: [{"name": "ふいうち", "type": "dark"}],
    charged: [{"name": "どろばくだん", "type": "ground"}, {"name": "ストーンエッジ", "type": "rock"}]
  },
  "アローラダグトリオ": {
    fast: [{"name": "どろかけ", "type": "ground"}],
    charged: [{"name": "どろばくだん", "type": "ground"}, {"name": "アイアンヘッド", "type": "steel"}]
  },
  "ペルシアン": {
    fast: [{"name": "だましうち", "type": "dark"}],
    charged: [{"name": "つじぎり", "type": "dark", "legacy": true}, {"name": "パワージェム", "type": "rock"}]
  },
  "アローラペルシアン": {
    fast: [{"name": "だましうち", "type": "dark"}],
    charged: [{"name": "イカサマ", "type": "dark"}, {"name": "じゃれつく", "type": "fairy"}]
  },
  "ゴルダック": {
    fast: [{"name": "ねんりき", "type": "psychic"}],
    charged: [{"name": "クロスチョップ", "type": "fighting"}, {"name": "アクアブレイク", "type": "water"}]
  },
  "ウインディ": {
    fast: [{"name": "ほのおのキバ", "type": "fire"}],
    charged: [{"name": "ワイルドボルト", "type": "electric"}, {"name": "サイコファング", "type": "psychic"}]
  },
  "ヒスイウインディ": {
    fast: [{"name": "バークアウト", "type": "dark"}],
    charged: [{"name": "ワイルドボルト", "type": "electric"}, {"name": "いわなだれ", "type": "rock"}]
  },
  "ニョロボン": {
    fast: [{"name": "マッドショット", "type": "ground"}],
    charged: [{"name": "こごえるかぜ", "type": "ice"}, {"name": "ばくれつパンチ", "type": "fighting"}]
  },
  "フーディン": {
    fast: [{"name": "サイコカッター", "type": "psychic"}],
    charged: [{"name": "ほのおのパンチ", "type": "fire"}, {"name": "シャドーボール", "type": "ghost"}]
  },
  "カイリキー": {
    fast: [{"name": "からてチョップ", "type": "fighting", "legacy": true}],
    charged: [{"name": "クロスチョップ", "type": "fighting"}, {"name": "いわなだれ", "type": "rock"}]
  },
  "ウツボット": {
    fast: [{"name": "ようかいえき", "type": "poison"}],
    charged: [{"name": "リーフブレード", "type": "grass"}, {"name": "ヘドロばくだん", "type": "poison"}]
  },
  "ゴローニャ": {
    fast: [{"name": "どろかけ", "type": "ground"}],
    charged: [{"name": "ストーンエッジ", "type": "rock"}, {"name": "じしん", "type": "ground"}]
  },
  "アローラゴローニャ": {
    fast: [{"name": "ボルトチェンジ", "type": "electric"}],
    charged: [{"name": "ワイルドボルト", "type": "electric"}, {"name": "ロックブラスト", "type": "rock"}]
  },
  "ギャロップ": {
    fast: [{"name": "やきつくす", "type": "fire"}],
    charged: [{"name": "ドリルライナー", "type": "ground"}, {"name": "ワイルドボルト", "type": "electric", "legacy": true}]
  },
  "ガラルギャロップ": {
    fast: [{"name": "ようせいのかぜ", "type": "fairy"}],
    charged: [{"name": "のしかかり", "type": "normal"}, {"name": "ワイルドボルト", "type": "electric", "legacy": true}]
  },
  "ヤドラン": {
    fast: [{"name": "ねんりき", "type": "psychic"}],
    charged: [{"name": "ドレインパンチ", "type": "fighting"}, {"name": "れいとうビーム", "type": "ice"}]
  },
  "ガラルヤドラン": {
    fast: [{"name": "ねんりき", "type": "psychic"}],
    charged: [{"name": "ドレインパンチ", "type": "fighting"}, {"name": "ヘドロばくだん", "type": "poison"}]
  },
  "ドードリオ": {
    fast: [{"name": "つつく", "type": "flying"}],
    charged: [{"name": "ドリルくちばし", "type": "flying"}, {"name": "ブレイブバード", "type": "flying"}]
  },
  "ジュゴン": {
    fast: [{"name": "こおりのつぶて", "type": "ice", "legacy": true}],
    charged: [{"name": "こごえるかぜ", "type": "ice", "legacy": true}, {"name": "ドリルライナー", "type": "ground"}]
  },
  "ベトベトン": {
    fast: [{"name": "どくづき", "type": "poison"}],
    charged: [{"name": "かみなりパンチ", "type": "electric"}, {"name": "あくのはどう", "type": "dark"}]
  },
  "アローラベトベトン": {
    fast: [{"name": "どくづき", "type": "poison"}],
    charged: [{"name": "あくのはどう", "type": "dark"}, {"name": "アシッドボム", "type": "poison"}]
  },
  "パルシェン": {
    fast: [{"name": "こおりのつぶて", "type": "ice"}],
    charged: [{"name": "こごえるかぜ", "type": "ice"}, {"name": "アクアブレイク", "type": "water"}]
  },
  "ゲンガー": {
    fast: [{"name": "シャドークロー", "type": "ghost"}],
    charged: [{"name": "シャドーパンチ", "type": "ghost", "legacy": true}, {"name": "シャドーボール", "type": "ghost"}]
  },
  "スリーパー": {
    fast: [{"name": "ねんりき", "type": "psychic"}],
    charged: [{"name": "シャドーボール", "type": "ghost"}, {"name": "かみなりパンチ", "type": "electric"}]
  },
  "キングラー": {
    fast: [{"name": "マッドショット", "type": "ground", "legacy": true}],
    charged: [{"name": "クラブハンマー", "type": "water"}, {"name": "はさむ", "type": "normal"}]
  },
  "マルマイン": {
    fast: [{"name": "ボルトチェンジ", "type": "electric"}],
    charged: [{"name": "ほうでん", "type": "electric"}, {"name": "イカサマ", "type": "dark"}]
  },
  "ヒスイマルマイン": {
    fast: [{"name": "でんきショック", "type": "electric"}],
    charged: [{"name": "ワイルドボルト", "type": "electric"}, {"name": "エナジーボール", "type": "grass"}]
  },
  "ナッシー": {
    fast: [{"name": "ねんりき", "type": "psychic"}],
    charged: [{"name": "タネばくだん", "type": "grass"}, {"name": "サイコキネシス", "type": "psychic"}]
  },
  "アローラナッシー": {
    fast: [{"name": "ドラゴンテール", "type": "dragon"}],
    charged: [{"name": "タネばくだん", "type": "grass"}, {"name": "りゅうせいぐん", "type": "dragon", "legacy": true}]
  },
  "ガラガラ": {
    fast: [{"name": "どろかけ", "type": "ground"}],
    charged: [{"name": "ホネこんぼう", "type": "ground"}, {"name": "いわなだれ", "type": "rock"}]
  },
  "アローラガラガラ": {
    fast: [{"name": "ほのおのうず", "type": "fire"}],
    charged: [{"name": "ホネこんぼう", "type": "ground"}, {"name": "シャドーボーン", "type": "ghost", "legacy": true}]
  },
  "サワムラー": {
    fast: [{"name": "けたぐり", "type": "fighting"}],
    charged: [{"name": "ブレイズキック", "type": "fire"}, {"name": "かわらわり", "type": "fighting", "legacy": true}]
  },
  "エビワラー": {
    fast: [{"name": "カウンター", "type": "fighting"}],
    charged: [{"name": "れいとうパンチ", "type": "ice"}, {"name": "かみなりパンチ", "type": "electric"}]
  },
  "マタドガス": {
    fast: [{"name": "ころがる", "type": "rock"}],
    charged: [{"name": "ヘドロばくだん", "type": "poison"}, {"name": "シャドーボール", "type": "ghost"}]
  },
  "ガルーラ": {
    fast: [{"name": "けたぐり", "type": "fighting"}],
    charged: [{"name": "かわらわり", "type": "fighting", "legacy": true}, {"name": "かみくだく", "type": "dark"}]
  },
  "スターミー": {
    fast: [{"name": "サイコウェーブ", "type": "psychic"}],
    charged: [{"name": "アクアジェット", "type": "water"}, {"name": "パワージェム", "type": "rock"}]
  },
  "ルージュラ": {
    fast: [{"name": "ねんりき", "type": "psychic"}],
    charged: [{"name": "ゆきなだれ", "type": "ice"}, {"name": "サイコショック", "type": "psychic"}]
  },
  "カイロス": {
    fast: [{"name": "れんぞくぎり", "type": "bug"}],
    charged: [{"name": "インファイト", "type": "fighting"}, {"name": "シザークロス", "type": "bug"}]
  },
  "ケンタロス": {
    fast: [{"name": "たいあたり", "type": "normal"}],
    charged: [{"name": "くさわけ", "type": "grass"}, {"name": "つのでつく", "type": "normal"}]
  },
  "ギャラドス": {
    fast: [{"name": "りゅうのいぶき", "type": "dragon"}],
    charged: [{"name": "アクアテール", "type": "water", "legacy": true}, {"name": "たつまき", "type": "dragon"}]
  },
  "ラプラス": {
    fast: [{"name": "サイコウェーブ", "type": "psychic"}],
    charged: [{"name": "うたかたのアリア", "type": "water"}, {"name": "れいとうビーム", "type": "ice", "legacy": true}]
  },
  "シャワーズ": {
    fast: [{"name": "みずでっぽう", "type": "water"}],
    charged: [{"name": "アクアテール", "type": "water"}, {"name": "とっておき", "type": "normal", "legacy": true}]
  },
  "サンダース": {
    fast: [{"name": "でんきショック", "type": "electric"}],
    charged: [{"name": "ほうでん", "type": "electric"}, {"name": "とっておき", "type": "normal", "legacy": true}]
  },
  "ブースター": {
    fast: [{"name": "ひのこ", "type": "fire"}],
    charged: [{"name": "ばかぢから", "type": "fighting", "legacy": true}, {"name": "ねっぷう", "type": "fire", "legacy": true}]
  },
  "オムスター": {
    fast: [{"name": "マッドショット", "type": "ground"}],
    charged: [{"name": "いわなだれ", "type": "rock", "legacy": true}, {"name": "ハイドロポンプ", "type": "water"}]
  },
  "カブトプス": {
    fast: [{"name": "れんぞくぎり", "type": "bug", "legacy": true}],
    charged: [{"name": "アクアジェット", "type": "water"}, {"name": "ストーンエッジ", "type": "rock"}]
  },
  "プテラ": {
    fast: [{"name": "りゅうのいぶき", "type": "dragon"}],
    charged: [{"name": "いわなだれ", "type": "rock"}, {"name": "だいちのちから", "type": "ground"}]
  },
  "カビゴン": {
    fast: [{"name": "したでなめる", "type": "ghost"}],
    charged: [{"name": "のしかかり", "type": "normal"}, {"name": "ばかぢから", "type": "fighting"}]
  },
  "フリーザー": {
    fast: [{"name": "こなゆき", "type": "ice"}],
    charged: [{"name": "こごえるかぜ", "type": "ice"}, {"name": "ぼうふう", "type": "flying", "legacy": true}]
  },
  "ガラルフリーザー": {
    fast: [{"name": "サイコカッター", "type": "psychic"}],
    charged: [{"name": "そらをとぶ", "type": "flying"}, {"name": "ブレイブバード", "type": "flying"}]
  },
  "サンダー": {
    fast: [{"name": "でんきショック", "type": "electric", "legacy": true}],
    charged: [{"name": "ドリルくちばし", "type": "flying"}, {"name": "ねっぷう", "type": "fire"}]
  },
  "ガラルサンダー": {
    fast: [{"name": "けたぐり", "type": "fighting"}],
    charged: [{"name": "そらをとぶ", "type": "flying"}, {"name": "ブレイブバード", "type": "flying"}]
  },
  "ファイヤー": {
    fast: [{"name": "つばさでうつ", "type": "flying"}],
    charged: [{"name": "そらをとぶ", "type": "flying"}, {"name": "ねっぷう", "type": "fire"}]
  },
  "アーマードミュウツー": {
    fast: [{"name": "ねんりき", "type": "psychic"}],
    charged: [{"name": "サイコブレイク", "type": "psychic", "legacy": true}, {"name": "ばくれつパンチ", "type": "fighting"}]
  },
  "ミュウ": {
    fast: [{"name": "シャドークロー", "type": "ghost"}],
    charged: [{"name": "ワイルドボルト", "type": "electric"}, {"name": "サイコショック", "type": "psychic"}]
  },
  "ヒスイバクフーン": {
    fast: [{"name": "ひのこ", "type": "fire"}],
    charged: [{"name": "シャドーボール", "type": "ghost"}, {"name": "ワイルドボルト", "type": "electric"}]
  },
  "ヨルノズク": {
    fast: [{"name": "つばさでうつ", "type": "flying"}],
    charged: [{"name": "シャドーボール", "type": "ghost"}, {"name": "おんがえし", "type": "normal"}]
  },
  "レディアン": {
    fast: [{"name": "ころがる", "type": "rock"}],
    charged: [{"name": "ばくれつパンチ", "type": "fighting"}, {"name": "アクロバット", "type": "flying"}]
  },
  "アリアドス": {
    fast: [{"name": "どくばり", "type": "poison"}],
    charged: [{"name": "とびかかる", "type": "bug"}, {"name": "くさわけ", "type": "grass"}]
  },
  "クロバット": {
    fast: [{"name": "エアスラッシュ", "type": "flying"}],
    charged: [{"name": "どくどくのキバ", "type": "poison"}, {"name": "シャドーボール", "type": "ghost"}]
  },
  "ネイティオ": {
    fast: [{"name": "つつく", "type": "flying"}],
    charged: [{"name": "サイコショック", "type": "psychic"}, {"name": "シャドーボール", "type": "ghost"}]
  },
  "キレイハナ": {
    fast: [{"name": "ようかいえき", "type": "poison"}],
    charged: [{"name": "リーフブレード", "type": "grass"}, {"name": "マジカルシャイン", "type": "fairy"}]
  },
  "ウソッキー": {
    fast: [{"name": "カウンター", "type": "fighting"}],
    charged: [{"name": "メテオビーム", "type": "rock"}, {"name": "くさわけ", "type": "grass"}]
  },
  "ニョロトノ": {
    fast: [{"name": "マッドショット", "type": "ground"}],
    charged: [{"name": "ウェザーボール", "type": "water"}, {"name": "れいとうビーム", "type": "ice", "legacy": true}]
  },
  "キマワリ": {
    fast: [{"name": "タネマシンガン", "type": "grass"}],
    charged: [{"name": "リーフストーム", "type": "grass"}, {"name": "ヘドロばくだん", "type": "poison"}]
  },
  "エーフィ": {
    fast: [{"name": "ねんりき", "type": "psychic"}],
    charged: [{"name": "サイコファング", "type": "psychic"}, {"name": "シャドーボール", "type": "ghost", "legacy": true}]
  },
  "ヤドキング": {
    fast: [{"name": "ねんりき", "type": "psychic"}],
    charged: [{"name": "なみのり", "type": "water", "legacy": true}, {"name": "ふぶき", "type": "ice"}]
  },
  "ガラルヤドキング": {
    fast: [{"name": "ようかいえき", "type": "poison"}],
    charged: [{"name": "サイコショック", "type": "psychic"}, {"name": "シャドーボール", "type": "ghost"}]
  },
  "アンノーン": {
    fast: [{"name": "めざめるパワー", "type": "psychic"}],
    charged: [{"name": "わるあがき", "type": "normal"}, {"name": "none", "type": "normal"}]
  },
  "ソーナンス": {
    fast: [{"name": "カウンター", "type": "fighting"}],
    charged: [{"name": "おんがえし", "type": "normal"}, {"name": "ミラーコート", "type": "psychic"}]
  },
  "ハガネール": {
    fast: [{"name": "かみなりのキバ", "type": "electric"}],
    charged: [{"name": "サイコファング", "type": "psychic"}, {"name": "かみくだく", "type": "dark"}]
  },
  "グランブル": {
    fast: [{"name": "あまえる", "type": "fairy"}],
    charged: [{"name": "インファイト", "type": "fighting"}, {"name": "かみくだく", "type": "dark"}]
  },
  "ハッサム": {
    fast: [{"name": "バレットパンチ", "type": "steel"}],
    charged: [{"name": "つじぎり", "type": "dark"}, {"name": "くさわけ", "type": "grass"}]
  },
  "ツボツボ": {
    fast: [{"name": "いわおとし", "type": "rock"}],
    charged: [{"name": "ジャイロボール", "type": "steel"}, {"name": "ロックブラスト", "type": "rock"}]
  },
  "ヘラクロス": {
    fast: [{"name": "れんぞくぎり", "type": "bug"}],
    charged: [{"name": "はやてがえし", "type": "fighting"}, {"name": "がんせきふうじ", "type": "rock"}]
  },
  "マグカルゴ": {
    fast: [{"name": "ひのこ", "type": "fire"}],
    charged: [{"name": "がんせきふうじ", "type": "rock"}, {"name": "オーバーヒート", "type": "fire"}]
  },
  "サニーゴ": {
    fast: [{"name": "あわ", "type": "water"}],
    charged: [{"name": "パワージェム", "type": "rock"}, {"name": "ロックブラスト", "type": "rock"}]
  },
  "オクタン": {
    fast: [{"name": "ロックオン", "type": "normal"}],
    charged: [{"name": "オクタンほう", "type": "water"}, {"name": "ダストシュート", "type": "poison"}]
  },
  "デリバード": {
    fast: [{"name": "プレゼント", "type": "normal"}],
    charged: [{"name": "つばめがえし", "type": "flying"}, {"name": "れいとうパンチ", "type": "ice"}]
  },
  "マンタイン": {
    fast: [{"name": "つばさでうつ", "type": "flying"}],
    charged: [{"name": "たつまき", "type": "dragon"}, {"name": "みずのはどう", "type": "water"}]
  },
  "ヘルガー": {
    fast: [{"name": "バークアウト", "type": "dark"}],
    charged: [{"name": "イカサマ", "type": "dark"}, {"name": "かえんほうしゃ", "type": "fire"}]
  },
  "ドンファン": {
    fast: [{"name": "どろかけ", "type": "ground"}],
    charged: [{"name": "のしかかり", "type": "normal"}, {"name": "くさわけ", "type": "grass"}]
  },
  "ドーブル": {
    fast: [{"name": "たいあたり", "type": "normal"}],
    charged: [{"name": "わるあがき", "type": "normal"}, {"name": "まきつく", "type": "normal"}]
  },
  "カポエラー": {
    fast: [{"name": "カウンター", "type": "fighting"}],
    charged: [{"name": "インファイト", "type": "fighting"}, {"name": "トリプルアクセル", "type": "ice"}]
  },
  "ミルタンク": {
    fast: [{"name": "ころがる", "type": "rock"}],
    charged: [{"name": "のしかかり", "type": "normal"}, {"name": "１０まんボルト", "type": "electric"}]
  },
  "ハピナス": {
    fast: [{"name": "しねんのずつき", "type": "psychic"}],
    charged: [{"name": "ワイルドボルト", "type": "electric", "legacy": true}, {"name": "マジカルシャイン", "type": "fairy"}]
  },
  "ライコウ": {
    fast: [{"name": "でんきショック", "type": "electric"}],
    charged: [{"name": "ワイルドボルト", "type": "electric"}, {"name": "はどうだん", "type": "fighting"}]
  },
  "エンテイ": {
    fast: [{"name": "ほのおのキバ", "type": "fire"}],
    charged: [{"name": "ニトロチャージ", "type": "fire"}, {"name": "ねっさのだいち", "type": "ground"}]
  },
  "スイクン": {
    fast: [{"name": "こおりのキバ", "type": "ice"}],
    charged: [{"name": "バブルこうせん", "type": "water"}, {"name": "ねっとう", "type": "water"}]
  },
  "ルギア": {
    fast: [{"name": "ドラゴンテール", "type": "dragon"}],
    charged: [{"name": "そらをとぶ", "type": "flying"}, {"name": "エアロブラスト", "type": "flying", "legacy": true}]
  },
  "ホウオウ": {
    fast: [{"name": "やきつくす", "type": "fire"}],
    charged: [{"name": "ブレイブバード", "type": "flying"}, {"name": "せいなるほのお", "type": "fire", "legacy": true}]
  },
  "セレビィ": {
    fast: [{"name": "ねんりき", "type": "psychic"}],
    charged: [{"name": "はどうだん", "type": "fighting"}, {"name": "リーフストーム", "type": "grass"}]
  },
  "アゲハント": {
    fast: [{"name": "まとわりつく", "type": "bug"}],
    charged: [{"name": "エアカッター", "type": "flying"}, {"name": "ぎんいろのかぜ", "type": "bug"}]
  },
  "ドクケイル": {
    fast: [{"name": "ねんりき", "type": "psychic"}],
    charged: [{"name": "ぎんいろのかぜ", "type": "bug"}, {"name": "ヘドロばくだん", "type": "poison"}]
  },
  "ルンパッパ": {
    fast: [{"name": "おどろかす", "type": "ghost"}],
    charged: [{"name": "ウェザーボール", "type": "water"}, {"name": "エナジーボール", "type": "grass"}]
  },
  "ダーテング": {
    fast: [{"name": "バークアウト", "type": "dark"}],
    charged: [{"name": "リーフブレード", "type": "grass"}, {"name": "イカサマ", "type": "dark"}]
  },
  "オオスバメ": {
    fast: [{"name": "つばさでうつ", "type": "flying"}],
    charged: [{"name": "ブレイブバード", "type": "flying"}, {"name": "つばめがえし", "type": "flying"}]
  },
  "ペリッパー": {
    fast: [{"name": "つばさでうつ", "type": "flying"}],
    charged: [{"name": "ウェザーボール", "type": "water"}, {"name": "ぼうふう", "type": "flying"}]
  },
  "サーナイト": {
    fast: [{"name": "ねんりき", "type": "psychic"}],
    charged: [{"name": "トリプルアクセル", "type": "ice"}, {"name": "シャドーボール", "type": "ghost"}]
  },
  "アメモース": {
    fast: [{"name": "エアスラッシュ", "type": "flying"}],
    charged: [{"name": "エアカッター", "type": "flying"}, {"name": "とびかかる", "type": "bug"}]
  },
  "キノガッサ": {
    fast: [{"name": "はっけい", "type": "fighting"}],
    charged: [{"name": "ばくれつパンチ", "type": "fighting"}, {"name": "くさむすび", "type": "grass", "legacy": true}]
  },
  "ケッキング": {
    fast: [{"name": "あくび", "type": "normal"}],
    charged: [{"name": "のしかかり", "type": "normal", "legacy": true}, {"name": "じしん", "type": "ground"}]
  },
  "テッカニン": {
    fast: [{"name": "れんぞくぎり", "type": "bug"}],
    charged: [{"name": "シャドーボール", "type": "ghost"}, {"name": "つばめがえし", "type": "flying"}]
  },
  "バクオング": {
    fast: [{"name": "おどろかす", "type": "ghost"}],
    charged: [{"name": "かみくだく", "type": "dark"}, {"name": "チャームボイス", "type": "fairy"}]
  },
  "ハリテヤマ": {
    fast: [{"name": "はっけい", "type": "fighting"}],
    charged: [{"name": "はやてがえし", "type": "fighting"}, {"name": "ヘビーボンバー", "type": "steel"}]
  },
  "エネコロロ": {
    fast: [{"name": "あまえる", "type": "fairy"}],
    charged: [{"name": "ワイルドボルト", "type": "electric"}, {"name": "チャームボイス", "type": "fairy"}]
  },
  "クチート": {
    fast: [{"name": "ようせいのかぜ", "type": "fairy"}],
    charged: [{"name": "はさむ", "type": "normal"}, {"name": "アイアンヘッド", "type": "steel"}]
  },
  "ボスゴドラ": {
    fast: [{"name": "ドラゴンテール", "type": "dragon"}],
    charged: [{"name": "がんせきふうじ", "type": "rock"}, {"name": "かみなり", "type": "electric"}]
  },
  "ライボルト": {
    fast: [{"name": "かみなりのキバ", "type": "electric"}],
    charged: [{"name": "サイコファング", "type": "psychic"}, {"name": "ワイルドボルト", "type": "electric"}]
  },
  "プラスル": {
    fast: [{"name": "でんこうせっか", "type": "normal"}],
    charged: [{"name": "１０まんボルト", "type": "electric"}, {"name": "くさむすび", "type": "grass"}]
  },
  "マイナン": {
    fast: [{"name": "でんこうせっか", "type": "normal"}],
    charged: [{"name": "１０まんボルト", "type": "electric"}, {"name": "くさむすび", "type": "grass"}]
  },
  "バルビート": {
    fast: [{"name": "たいあたり", "type": "normal"}],
    charged: [{"name": "１０まんボルト", "type": "electric"}, {"name": "むしのさざめき", "type": "bug"}]
  },
  "イルミーゼ": {
    fast: [{"name": "たいあたり", "type": "normal"}],
    charged: [{"name": "ぎんいろのかぜ", "type": "bug"}, {"name": "マジカルシャイン", "type": "fairy"}]
  },
  "マルノーム": {
    fast: [{"name": "マッドショット", "type": "ground"}],
    charged: [{"name": "ヘドロこうげき", "type": "poison"}, {"name": "れいとうビーム", "type": "ice"}]
  },
  "サメハダー": {
    fast: [{"name": "たきのぼり", "type": "water"}],
    charged: [{"name": "かみくだく", "type": "dark"}, {"name": "どくどくのキバ", "type": "poison"}]
  },
  "ホエルオー": {
    fast: [{"name": "ころがる", "type": "rock"}],
    charged: [{"name": "なみのり", "type": "water"}, {"name": "おんがえし", "type": "normal"}]
  },
  "バクーダ": {
    fast: [{"name": "やきつくす", "type": "fire"}],
    charged: [{"name": "だいちのちから", "type": "ground"}, {"name": "がんせきふうじ", "type": "rock"}]
  },
  "コータス": {
    fast: [{"name": "ひのこ", "type": "fire"}],
    charged: [{"name": "かえんぐるま", "type": "fire"}, {"name": "オーバーヒート", "type": "fire"}]
  },
  "パッチール": {
    fast: [{"name": "ふいうち", "type": "dark"}],
    charged: [{"name": "がんせきふうじ", "type": "rock"}, {"name": "こごえるかぜ", "type": "ice"}]
  },
  "フライゴン": {
    fast: [{"name": "ドラゴンテール", "type": "dragon"}],
    charged: [{"name": "すなじごく", "type": "ground"}, {"name": "たつまき", "type": "dragon"}]
  },
  "ノクタス": {
    fast: [{"name": "ふいうち", "type": "dark"}],
    charged: [{"name": "くさわけ", "type": "grass"}, {"name": "ばくれつパンチ", "type": "fighting"}]
  },
  "ザングース": {
    fast: [{"name": "れんぞくぎり", "type": "bug"}],
    charged: [{"name": "インファイト", "type": "fighting"}, {"name": "つじぎり", "type": "dark"}]
  },
  "ハブネーク": {
    fast: [{"name": "どくづき", "type": "poison"}],
    charged: [{"name": "どくどくのキバ", "type": "poison"}, {"name": "まきつく", "type": "normal"}]
  },
  "ルナトーン": {
    fast: [{"name": "サイコウェーブ", "type": "psychic"}],
    charged: [{"name": "ウェザーボール", "type": "ice"}, {"name": "いわなだれ", "type": "rock"}]
  },
  "ソルロック": {
    fast: [{"name": "サイコウェーブ", "type": "psychic"}],
    charged: [{"name": "ウェザーボール", "type": "fire"}, {"name": "いわなだれ", "type": "rock"}]
  },
  "シザリガー": {
    fast: [{"name": "たきのぼり", "type": "water"}],
    charged: [{"name": "つじぎり", "type": "dark"}, {"name": "ねっとう", "type": "water"}]
  },
  "ネンドール": {
    fast: [{"name": "どろかけ", "type": "ground"}],
    charged: [{"name": "がんせきふうじ", "type": "rock"}, {"name": "シャドーボール", "type": "ghost"}]
  },
  "ユレイドル": {
    fast: [{"name": "ようかいえき", "type": "poison"}],
    charged: [{"name": "がんせきふうじ", "type": "rock"}, {"name": "くさむすび", "type": "grass"}]
  },
  "アーマルド": {
    fast: [{"name": "れんぞくぎり", "type": "bug"}],
    charged: [{"name": "ロックブラスト", "type": "rock"}, {"name": "アクアブレイク", "type": "water"}]
  },
  "ミロカロス": {
    fast: [{"name": "たきのぼり", "type": "water"}],
    charged: [{"name": "アクアテール", "type": "water"}, {"name": "まきつく", "type": "normal"}]
  },
  "ポワルン": {
    fast: [{"name": "たたりめ", "type": "ghost"}],
    charged: [{"name": "ウェザーボール", "type": "rock"}, {"name": "エナジーボール", "type": "grass"}]
  },
  "ポワルン(あまみず)": {
    fast: [{"name": "みずでっぽう", "type": "water"}],
    charged: [{"name": "ウェザーボール", "type": "water"}, {"name": "かみなり", "type": "electric"}]
  },
  "ポワルン(ゆきぐも)": {
    fast: [{"name": "こなゆき", "type": "ice"}],
    charged: [{"name": "ウェザーボール", "type": "ice"}, {"name": "ふぶき", "type": "ice"}]
  },
  "ポワルン(たいよう)": {
    fast: [{"name": "ひのこ", "type": "fire"}],
    charged: [{"name": "ウェザーボール", "type": "fire"}, {"name": "ソーラービーム", "type": "grass"}]
  },
  "カクレオン": {
    fast: [{"name": "ふいうち", "type": "dark"}],
    charged: [{"name": "かみなりパンチ", "type": "electric"}, {"name": "ばくれつパンチ", "type": "fighting"}]
  },
  "ジュペッタ": {
    fast: [{"name": "シャドークロー", "type": "ghost"}],
    charged: [{"name": "シャドーボール", "type": "ghost"}, {"name": "マジカルシャイン", "type": "fairy"}]
  },
  "トロピウス": {
    fast: [{"name": "エアスラッシュ", "type": "flying"}],
    charged: [{"name": "リーフブレード", "type": "grass"}, {"name": "ぶんまわす", "type": "dark"}]
  },
  "チリーン": {
    fast: [{"name": "おどろかす", "type": "ghost"}],
    charged: [{"name": "サイコショック", "type": "psychic"}, {"name": "シャドーボール", "type": "ghost"}]
  },
  "アブソル": {
    fast: [{"name": "サイコカッター", "type": "psychic"}],
    charged: [{"name": "ぶんまわす", "type": "dark", "legacy": true}, {"name": "メガホーン", "type": "bug"}]
  },
  "オニゴーリ": {
    fast: [{"name": "ころがる", "type": "rock"}],
    charged: [{"name": "ゆきなだれ", "type": "ice"}, {"name": "シャドーボール", "type": "ghost"}]
  },
  "ハンテール": {
    fast: [{"name": "みずでっぽう", "type": "water"}],
    charged: [{"name": "アクアテール", "type": "water"}, {"name": "かみくだく", "type": "dark"}]
  },
  "サクラビス": {
    fast: [{"name": "ねんりき", "type": "psychic"}],
    charged: [{"name": "みずのはどう", "type": "water"}, {"name": "サイコキネシス", "type": "psychic"}]
  },
  "ジーランス": {
    fast: [{"name": "みずでっぽう", "type": "water"}],
    charged: [{"name": "アクアテール", "type": "water"}, {"name": "げんしのちから", "type": "rock"}]
  },
  "ラブカス": {
    fast: [{"name": "はねる", "type": "water"}],
    charged: [{"name": "アクアジェット", "type": "water"}, {"name": "ドレインキッス", "type": "fairy"}]
  },
  "ボーマンダ": {
    fast: [{"name": "ドラゴンテール", "type": "dragon"}],
    charged: [{"name": "そらをとぶ", "type": "flying"}, {"name": "ぶんまわす", "type": "dark"}]
  },
  "レジロック": {
    fast: [{"name": "ロックオン", "type": "normal"}],
    charged: [{"name": "ストーンエッジ", "type": "rock"}, {"name": "きあいだま", "type": "fighting"}]
  },
  "レジアイス": {
    fast: [{"name": "ロックオン", "type": "normal"}],
    charged: [{"name": "ふぶき", "type": "ice"}, {"name": "かみなり", "type": "electric", "legacy": true}]
  },
  "ラティアス": {
    fast: [{"name": "りゅうのいぶき", "type": "dragon"}],
    charged: [{"name": "はどうだん", "type": "fighting"}, {"name": "ミストボール", "type": "psychic", "legacy": true}]
  },
  "ラティオス": {
    fast: [{"name": "りゅうのいぶき", "type": "dragon"}],
    charged: [{"name": "はどうだん", "type": "fighting"}, {"name": "ラスターパージ", "type": "psychic", "legacy": true}]
  },
  "カイオーガ": {
    fast: [{"name": "たきのぼり", "type": "water"}],
    charged: [{"name": "ゆきなだれ", "type": "ice"}, {"name": "こんげんのはどう", "type": "water", "legacy": true}]
  },
  "グラードン": {
    fast: [{"name": "マッドショット", "type": "ground"}],
    charged: [{"name": "だんがいのつるぎ", "type": "ground", "legacy": true}, {"name": "ほのおのパンチ", "type": "fire", "legacy": true}]
  },
  "レックウザ": {
    fast: [{"name": "ドラゴンテール", "type": "dragon"}],
    charged: [{"name": "ワイドブレイカー", "type": "dragon", "legacy": true}, {"name": "ガリョウテンセイ", "type": "flying", "legacy": true}]
  },
  "ジラーチ": {
    fast: [{"name": "ねんりき", "type": "psychic"}],
    charged: [{"name": "はめつのねがい", "type": "steel"}, {"name": "はどうだん", "type": "fighting"}]
  },
  "デオキシス": {
    fast: [{"name": "チャージビーム", "type": "electric"}],
    charged: [{"name": "はかいこうせん", "type": "normal"}, {"name": "サイコブースト", "type": "psychic"}]
  },
  "デオキシス(A)": {
    fast: [{"name": "どくづき", "type": "poison"}],
    charged: [{"name": "あくのはどう", "type": "dark"}, {"name": "サイコブースト", "type": "psychic"}]
  },
  "デオキシス(S)": {
    fast: [{"name": "チャージビーム", "type": "electric"}],
    charged: [{"name": "サイコブースト", "type": "psychic"}, {"name": "スピードスター", "type": "normal"}]
  },
  "ドダイトス": {
    fast: [{"name": "どろかけ", "type": "ground"}],
    charged: [{"name": "ハードプラント", "type": "grass", "legacy": true}, {"name": "すなじごく", "type": "ground"}]
  },
  "ゴウカザル": {
    fast: [{"name": "ほのおのうず", "type": "fire"}],
    charged: [{"name": "インファイト", "type": "fighting"}, {"name": "ブラストバーン", "type": "fire", "legacy": true}]
  },
  "ムクホーク": {
    fast: [{"name": "つばさでうつ", "type": "flying"}],
    charged: [{"name": "そらをとぶ", "type": "flying"}, {"name": "インファイト", "type": "fighting"}]
  },
  "ビーダル": {
    fast: [{"name": "ころがる", "type": "rock"}],
    charged: [{"name": "なみのり", "type": "water"}, {"name": "ひっさつまえば", "type": "normal"}]
  },
  "コロトック": {
    fast: [{"name": "れんぞくぎり", "type": "bug"}],
    charged: [{"name": "シザークロス", "type": "bug"}, {"name": "つばめがえし", "type": "flying"}]
  },
  "レントラー": {
    fast: [{"name": "スパーク", "type": "electric"}],
    charged: [{"name": "ワイルドボルト", "type": "electric"}, {"name": "サイコファング", "type": "psychic", "legacy": true}]
  },
  "ロズレイド": {
    fast: [{"name": "どくばり", "type": "poison"}],
    charged: [{"name": "ウェザーボール", "type": "fire", "legacy": true}, {"name": "リーフストーム", "type": "grass"}]
  },
  "ラムパルド": {
    fast: [{"name": "うちおとす", "type": "rock"}],
    charged: [{"name": "いわなだれ", "type": "rock"}, {"name": "かえんほうしゃ", "type": "fire"}]
  },
  "ミノマダム(くさき)": {
    fast: [{"name": "ふいうち", "type": "dark"}],
    charged: [{"name": "エナジーボール", "type": "grass"}, {"name": "むしのさざめき", "type": "bug"}]
  },
  "ミノマダム(すなち)": {
    fast: [{"name": "ふいうち", "type": "dark"}],
    charged: [{"name": "むしのさざめき", "type": "bug"}, {"name": "じならし", "type": "ground"}]
  },
  "ミノマダム(ゴミ)": {
    fast: [{"name": "ふいうち", "type": "dark"}],
    charged: [{"name": "むしのさざめき", "type": "bug"}, {"name": "アイアンヘッド", "type": "steel"}]
  },
  "ガーメイル": {
    fast: [{"name": "むしくい", "type": "bug"}],
    charged: [{"name": "つばめがえし", "type": "flying"}, {"name": "むしのさざめき", "type": "bug"}]
  },
  "ビークイン": {
    fast: [{"name": "れんぞくぎり", "type": "bug"}],
    charged: [{"name": "シザークロス", "type": "bug"}, {"name": "パワージェム", "type": "rock"}]
  },
  "パチリス": {
    fast: [{"name": "ボルトチェンジ", "type": "electric"}],
    charged: [{"name": "ひっさつまえば", "type": "normal"}, {"name": "かみなりパンチ", "type": "electric"}]
  },
  "フローゼル": {
    fast: [{"name": "たきのぼり", "type": "water"}],
    charged: [{"name": "アクアジェット", "type": "water"}, {"name": "スピードスター", "type": "normal"}]
  },
  "チェリム(ネガ)": {
    fast: [{"name": "タネマシンガン", "type": "grass"}],
    charged: [{"name": "マジカルシャイン", "type": "fairy"}, {"name": "ソーラービーム", "type": "grass"}]
  },
  "チェリム(ポジ)": {
    fast: [{"name": "タネマシンガン", "type": "grass"}],
    charged: [{"name": "ウェザーボール", "type": "fire"}, {"name": "ソーラービーム", "type": "grass"}]
  },
  "エテボース": {
    fast: [{"name": "おどろかす", "type": "ghost"}],
    charged: [{"name": "つばめがえし", "type": "flying"}, {"name": "おんがえし", "type": "normal"}]
  },
  "フワライド": {
    fast: [{"name": "たたりめ", "type": "ghost"}],
    charged: [{"name": "こごえるかぜ", "type": "ice"}, {"name": "シャドーボール", "type": "ghost"}]
  },
  "ミミロップ": {
    fast: [{"name": "けたぐり", "type": "fighting"}],
    charged: [{"name": "かみなりパンチ", "type": "electric"}, {"name": "シャドーボール", "type": "ghost"}]
  },
  "ムウマージ": {
    fast: [{"name": "たたりめ", "type": "ghost"}],
    charged: [{"name": "シャドーボール", "type": "ghost"}, {"name": "マジカルシャイン", "type": "fairy"}]
  },
  "ドンカラス": {
    fast: [{"name": "つつく", "type": "flying"}],
    charged: [{"name": "ブレイブバード", "type": "flying"}, {"name": "あくのはどう", "type": "dark"}]
  },
  "ブニャット": {
    fast: [{"name": "シャドークロー", "type": "ghost"}],
    charged: [{"name": "つばめがえし", "type": "flying"}, {"name": "かみなり", "type": "electric"}]
  },
  "スカタンク": {
    fast: [{"name": "どくづき", "type": "poison"}],
    charged: [{"name": "かみくだく", "type": "dark"}, {"name": "くさわけ", "type": "grass"}]
  },
  "ドータクン": {
    fast: [{"name": "ねんりき", "type": "psychic"}],
    charged: [{"name": "ウェザーボール", "type": "water"}, {"name": "しっぺがえし", "type": "dark"}]
  },
  "ペラップ": {
    fast: [{"name": "つつく", "type": "flying"}],
    charged: [{"name": "ゴッドバード", "type": "flying"}, {"name": "ねっぷう", "type": "fire"}]
  },
  "ミカルゲ": {
    fast: [{"name": "ふいうち", "type": "dark"}],
    charged: [{"name": "がんせきふうじ", "type": "rock"}, {"name": "シャドーボール", "type": "ghost"}]
  },
  "ルカリオ": {
    fast: [{"name": "はっけい", "type": "fighting", "legacy": true}],
    charged: [{"name": "はどうだん", "type": "fighting"}, {"name": "シャドーボール", "type": "ghost"}]
  },
  "カバルドン": {
    fast: [{"name": "すなかけ", "type": "ground"}],
    charged: [{"name": "ウェザーボール", "type": "rock"}, {"name": "だいちのちから", "type": "ground"}]
  },
  "マスキッパ": {
    fast: [{"name": "つるのムチ", "type": "grass"}],
    charged: [{"name": "エナジーボール", "type": "grass"}, {"name": "かみくだく", "type": "dark"}]
  },
  "ネオラント": {
    fast: [{"name": "かぜおこし", "type": "flying"}],
    charged: [{"name": "アクアテール", "type": "water"}, {"name": "ぎんいろのかぜ", "type": "bug"}]
  },
  "マニューラ": {
    fast: [{"name": "バークアウト", "type": "dark"}],
    charged: [{"name": "ゆきなだれ", "type": "ice"}, {"name": "イカサマ", "type": "dark"}]
  },
  "ジバコイル": {
    fast: [{"name": "ボルトチェンジ", "type": "electric"}],
    charged: [{"name": "ワイルドボルト", "type": "electric"}, {"name": "ミラーショット", "type": "steel"}]
  },
  "ドサイドン": {
    fast: [{"name": "どろかけ", "type": "ground"}],
    charged: [{"name": "ドリルライナー", "type": "ground"}, {"name": "がんせきほう", "type": "rock", "legacy": true}]
  },
  "モジャンボ": {
    fast: [{"name": "つるのムチ", "type": "grass"}],
    charged: [{"name": "パワーウィップ", "type": "grass"}, {"name": "いわなだれ", "type": "rock"}]
  },
  "エレキブル": {
    fast: [{"name": "でんきショック", "type": "electric"}],
    charged: [{"name": "れいとうパンチ", "type": "ice"}, {"name": "ワイルドボルト", "type": "electric"}]
  },
  "ブーバーン": {
    fast: [{"name": "からてチョップ", "type": "fighting"}],
    charged: [{"name": "ほのおのパンチ", "type": "fire"}, {"name": "１０まんボルト", "type": "electric", "legacy": true}]
  },
  "トゲキッス": {
    fast: [{"name": "つつく", "type": "flying"}],
    charged: [{"name": "サイコショック", "type": "psychic"}, {"name": "はどうだん", "type": "fighting", "legacy": true}]
  },
  "メガヤンマ": {
    fast: [{"name": "つばさでうつ", "type": "flying"}],
    charged: [{"name": "つばめがえし", "type": "flying"}, {"name": "げんしのちから", "type": "rock"}]
  },
  "リーフィア": {
    fast: [{"name": "でんこうせっか", "type": "normal"}],
    charged: [{"name": "リーフブレード", "type": "grass"}, {"name": "エナジーボール", "type": "grass"}]
  },
  "グレイシア": {
    fast: [{"name": "こおりのつぶて", "type": "ice"}],
    charged: [{"name": "ゆきなだれ", "type": "ice"}, {"name": "みずのはどう", "type": "water", "legacy": true}]
  },
  "グライオン": {
    fast: [{"name": "つばさでうつ", "type": "flying"}],
    charged: [{"name": "すなじごく", "type": "ground"}, {"name": "アクロバット", "type": "flying"}]
  },
  "マンムー": {
    fast: [{"name": "こなゆき", "type": "ice"}],
    charged: [{"name": "つららばり", "type": "ice"}, {"name": "ストーンエッジ", "type": "rock"}]
  },
  "エルレイド": {
    fast: [{"name": "サイコカッター", "type": "psychic"}],
    charged: [{"name": "インファイト", "type": "fighting"}, {"name": "リーフブレード", "type": "grass"}]
  },
  "ダイノーズ": {
    fast: [{"name": "スパーク", "type": "electric"}],
    charged: [{"name": "いわなだれ", "type": "rock"}, {"name": "でんじほう", "type": "electric"}]
  },
  "ヨノワール": {
    fast: [{"name": "おどろかす", "type": "ghost"}],
    charged: [{"name": "ばくれつパンチ", "type": "fighting"}, {"name": "シャドーパンチ", "type": "ghost"}]
  },
  "ユキメノコ": {
    fast: [{"name": "こなゆき", "type": "ice"}],
    charged: [{"name": "ゆきなだれ", "type": "ice"}, {"name": "シャドーボール", "type": "ghost"}]
  },
  "ロトム": {
    fast: [{"name": "おどろかす", "type": "ghost"}],
    charged: [{"name": "１０まんボルト", "type": "electric"}, {"name": "あやしいかぜ", "type": "ghost"}]
  },
  "スピンロトム": {
    fast: [{"name": "おどろかす", "type": "ghost"}],
    charged: [{"name": "１０まんボルト", "type": "electric"}, {"name": "あやしいかぜ", "type": "ghost"}]
  },
  "フロストロトム": {
    fast: [{"name": "でんきショック", "type": "electric"}],
    charged: [{"name": "１０まんボルト", "type": "electric"}, {"name": "ふぶき", "type": "ice"}]
  },
  "ヒートロトム": {
    fast: [{"name": "でんきショック", "type": "electric"}],
    charged: [{"name": "オーバーヒート", "type": "fire"}, {"name": "１０まんボルト", "type": "electric"}]
  },
  "カットロトム": {
    fast: [{"name": "でんきショック", "type": "electric"}],
    charged: [{"name": "あやしいかぜ", "type": "ghost"}, {"name": "リーフストーム", "type": "grass"}]
  },
  "ウォッシュロトム": {
    fast: [{"name": "でんきショック", "type": "electric"}],
    charged: [{"name": "１０まんボルト", "type": "electric"}, {"name": "ハイドロポンプ", "type": "water"}]
  },
  "ユクシー": {
    fast: [{"name": "ねんりき", "type": "psychic"}],
    charged: [{"name": "スピードスター", "type": "normal"}, {"name": "かみなり", "type": "electric"}]
  },
  "エムリット": {
    fast: [{"name": "ねんりき", "type": "psychic"}],
    charged: [{"name": "スピードスター", "type": "normal"}, {"name": "みらいよち", "type": "psychic"}]
  },
  "アグノム": {
    fast: [{"name": "ねんりき", "type": "psychic"}],
    charged: [{"name": "スピードスター", "type": "normal"}, {"name": "みらいよち", "type": "psychic"}]
  },
  "ディアルガ": {
    fast: [{"name": "りゅうのいぶき", "type": "dragon"}],
    charged: [{"name": "アイアンヘッド", "type": "steel"}, {"name": "かみなり", "type": "electric"}]
  },
  "ディアルガ(オリジン)": {
    fast: [{"name": "りゅうのいぶき", "type": "dragon"}],
    charged: [{"name": "ときのほうこう", "type": "dragon"}, {"name": "アイアンヘッド", "type": "steel"}]
  },
  "パルキア": {
    fast: [{"name": "りゅうのいぶき", "type": "dragon"}],
    charged: [{"name": "アクアテール", "type": "water"}, {"name": "りゅうせいぐん", "type": "dragon"}]
  },
  "パルキア(オリジン)": {
    fast: [{"name": "りゅうのいぶき", "type": "dragon"}],
    charged: [{"name": "アクアテール", "type": "water"}, {"name": "りゅうせいぐん", "type": "dragon"}]
  },
  "ヒードラン": {
    fast: [{"name": "ほのおのうず", "type": "fire"}],
    charged: [{"name": "マグマストーム", "type": "fire", "legacy": true}, {"name": "だいちのちから", "type": "ground"}]
  },
  "レジギガス": {
    fast: [{"name": "めざめるパワー", "type": "ground"}],
    charged: [{"name": "にぎりつぶす", "type": "normal", "legacy": true}, {"name": "かみなり", "type": "electric"}]
  },
  "ギラティナ(アナザー)": {
    fast: [{"name": "りゅうのいぶき", "type": "dragon"}],
    charged: [{"name": "ドラゴンクロー", "type": "dragon"}, {"name": "かげうち", "type": "ghost"}]
  },
  "ギラティナ(オリジン)": {
    fast: [{"name": "ドラゴンテール", "type": "dragon"}],
    charged: [{"name": "あやしいかぜ", "type": "ghost"}, {"name": "シャドーボール", "type": "ghost"}]
  },
  "クレセリア": {
    fast: [{"name": "サイコカッター", "type": "psychic"}],
    charged: [{"name": "くさむすび", "type": "grass", "legacy": true}, {"name": "ムーンフォース", "type": "fairy"}]
  },
  "ダークライ": {
    fast: [{"name": "バークアウト", "type": "dark"}],
    charged: [{"name": "あくのはどう", "type": "dark"}, {"name": "きあいだま", "type": "fighting"}]
  },
  "シェイミ": {
    fast: [{"name": "マジカルリーフ", "type": "grass"}],
    charged: [{"name": "くさむすび", "type": "grass"}, {"name": "シードフレア", "type": "grass", "legacy": true}]
  },
  "ビクティニ": {
    fast: [{"name": "ねんりき", "type": "psychic"}],
    charged: [{"name": "Ｖジェネレート", "type": "fire"}, {"name": "サイコショック", "type": "psychic"}]
  },
  "ジャローダ": {
    fast: [{"name": "つるのムチ", "type": "grass"}],
    charged: [{"name": "ハードプラント", "type": "grass", "legacy": true}, {"name": "つばめがえし", "type": "flying"}]
  },
  "エンブオー": {
    fast: [{"name": "ひのこ", "type": "fire"}],
    charged: [{"name": "ブラストバーン", "type": "fire", "legacy": true}, {"name": "ねっぷう", "type": "fire"}]
  },
  "ヒスイダイケンキ": {
    fast: [{"name": "れんぞくぎり", "type": "bug"}],
    charged: [{"name": "せいなるつるぎ", "type": "fighting"}, {"name": "こごえるかぜ", "type": "ice"}]
  },
  "ミルホッグ": {
    fast: [{"name": "けたぐり", "type": "fighting"}],
    charged: [{"name": "かみくだく", "type": "dark"}, {"name": "くさむすび", "type": "grass"}]
  },
  "ムーランド": {
    fast: [{"name": "すなかけ", "type": "ground"}],
    charged: [{"name": "ワイルドボルト", "type": "electric"}, {"name": "かみくだく", "type": "dark"}]
  },
  "レパルダス": {
    fast: [{"name": "バークアウト", "type": "dark"}],
    charged: [{"name": "あくのはどう", "type": "dark"}, {"name": "じゃれつく", "type": "fairy"}]
  },
  "ヤナッキー": {
    fast: [{"name": "つるのムチ", "type": "grass"}],
    charged: [{"name": "くさむすび", "type": "grass"}, {"name": "かみくだく", "type": "dark"}]
  },
  "バオッキー": {
    fast: [{"name": "ほのおのうず", "type": "fire"}],
    charged: [{"name": "かみくだく", "type": "dark"}, {"name": "かえんほうしゃ", "type": "fire"}]
  },
  "ヒヤッキー": {
    fast: [{"name": "みずでっぽう", "type": "water"}],
    charged: [{"name": "なみのり", "type": "water"}, {"name": "かみくだく", "type": "dark"}]
  },
  "ムシャーナ": {
    fast: [{"name": "チャージビーム", "type": "electric"}],
    charged: [{"name": "サイコショック", "type": "psychic"}, {"name": "マジカルシャイン", "type": "fairy"}]
  },
  "ケンホロウ": {
    fast: [{"name": "エアスラッシュ", "type": "flying"}],
    charged: [{"name": "ゴッドバード", "type": "flying"}, {"name": "ねっぷう", "type": "fire"}]
  },
  "ゼブライカ": {
    fast: [{"name": "けたぐり", "type": "fighting"}],
    charged: [{"name": "ワイルドボルト", "type": "electric"}, {"name": "ニトロチャージ", "type": "fire"}]
  },
  "ギガイアス": {
    fast: [{"name": "ロックオン", "type": "normal"}],
    charged: [{"name": "ばかぢから", "type": "fighting"}, {"name": "メテオビーム", "type": "rock", "legacy": true}]
  },
  "ココロモリ": {
    fast: [{"name": "ねんりき", "type": "psychic"}],
    charged: [{"name": "そらをとぶ", "type": "flying"}, {"name": "サイコファング", "type": "psychic"}]
  },
  "ドリュウズ": {
    fast: [{"name": "マッドショット", "type": "ground"}],
    charged: [{"name": "ドリルライナー", "type": "ground"}, {"name": "いわなだれ", "type": "rock"}]
  },
  "タブンネ": {
    fast: [{"name": "しねんのずつき", "type": "psychic"}],
    charged: [{"name": "のしかかり", "type": "normal", "legacy": true}, {"name": "チャームボイス", "type": "fairy"}]
  },
  "ローブシン": {
    fast: [{"name": "はっけい", "type": "fighting"}],
    charged: [{"name": "ばくれつパンチ", "type": "fighting"}, {"name": "ぶんまわす", "type": "dark", "legacy": true}]
  },
  "ガマゲロゲ": {
    fast: [{"name": "マッドショット", "type": "ground"}],
    charged: [{"name": "だいちのちから", "type": "ground"}, {"name": "こごえるかぜ", "type": "ice"}]
  },
  "ナゲキ": {
    fast: [{"name": "けたぐり", "type": "fighting"}],
    charged: [{"name": "かわらわり", "type": "fighting"}, {"name": "のしかかり", "type": "normal"}]
  },
  "ダゲキ": {
    fast: [{"name": "けたぐり", "type": "fighting"}],
    charged: [{"name": "かわらわり", "type": "fighting"}, {"name": "のしかかり", "type": "normal"}]
  },
  "ペンドラー": {
    fast: [{"name": "どくばり", "type": "poison"}],
    charged: [{"name": "アクアテール", "type": "water"}, {"name": "メガホーン", "type": "bug"}]
  },
  "エルフーン": {
    fast: [{"name": "ようせいのかぜ", "type": "fairy"}],
    charged: [{"name": "タネばくだん", "type": "grass"}, {"name": "ムーンフォース", "type": "fairy"}]
  },
  "ドレディア": {
    fast: [{"name": "あまえる", "type": "fairy"}],
    charged: [{"name": "はなふぶき", "type": "grass"}, {"name": "はかいこうせん", "type": "normal"}]
  },
  "ヒスイドレディア": {
    fast: [{"name": "タネマシンガン", "type": "grass"}],
    charged: [{"name": "はやてがえし", "type": "fighting"}, {"name": "はなふぶき", "type": "grass"}]
  },
  "ワルビアル": {
    fast: [{"name": "どろかけ", "type": "ground"}],
    charged: [{"name": "すなじごく", "type": "ground"}, {"name": "かみくだく", "type": "dark"}]
  },
  "ヒヒダルマ(ガラル)": {
    fast: [{"name": "こおりのキバ", "type": "ice"}],
    charged: [{"name": "ゆきなだれ", "type": "ice"}, {"name": "ばかぢから", "type": "fighting"}]
  },
  "ヒヒダルマ": {
    fast: [{"name": "やきつくす", "type": "fire"}],
    charged: [{"name": "いわなだれ", "type": "rock"}, {"name": "オーバーヒート", "type": "fire"}]
  },
  "マラカッチ": {
    fast: [{"name": "タネマシンガン", "type": "grass"}],
    charged: [{"name": "つばめがえし", "type": "flying"}, {"name": "はなふぶき", "type": "grass"}]
  },
  "イワパレス": {
    fast: [{"name": "れんぞくぎり", "type": "bug"}],
    charged: [{"name": "シザークロス", "type": "bug"}, {"name": "がんせきほう", "type": "rock"}]
  },
  "ズルズキン": {
    fast: [{"name": "カウンター", "type": "fighting"}],
    charged: [{"name": "イカサマ", "type": "dark"}, {"name": "はやてがえし", "type": "fighting"}]
  },
  "シンボラー": {
    fast: [{"name": "エアスラッシュ", "type": "flying"}],
    charged: [{"name": "エアカッター", "type": "flying"}, {"name": "げんしのちから", "type": "rock"}]
  },
  "デスカーン": {
    fast: [{"name": "シャドークロー", "type": "ghost"}],
    charged: [{"name": "シャドーボール", "type": "ghost"}, {"name": "おんがえし", "type": "normal"}]
  },
  "アバゴーラ": {
    fast: [{"name": "みずでっぽう", "type": "water"}],
    charged: [{"name": "アクアブレイク", "type": "water"}, {"name": "げんしのちから", "type": "rock"}]
  },
  "アーケオス": {
    fast: [{"name": "つばさでうつ", "type": "flying"}],
    charged: [{"name": "げんしのちから", "type": "rock"}, {"name": "かみくだく", "type": "dark"}]
  },
  "ダストダス": {
    fast: [{"name": "まとわりつく", "type": "bug"}],
    charged: [{"name": "のしかかり", "type": "normal"}, {"name": "タネばくだん", "type": "grass"}]
  },
  "ゾロアーク": {
    fast: [{"name": "シャドークロー", "type": "ghost"}],
    charged: [{"name": "イカサマ", "type": "dark"}, {"name": "ヘドロばくだん", "type": "poison"}]
  },
  "ヒスイゾロアーク": {
    fast: [{"name": "シャドークロー", "type": "ghost"}],
    charged: [{"name": "シャドーボール", "type": "ghost"}, {"name": "イカサマ", "type": "dark"}]
  },
  "チラチーノ": {
    fast: [{"name": "あまえる", "type": "fairy"}],
    charged: [{"name": "アクアテール", "type": "water"}, {"name": "１０まんボルト", "type": "electric"}]
  },
  "ゴチルゼル": {
    fast: [{"name": "ねんりき", "type": "psychic"}],
    charged: [{"name": "いわなだれ", "type": "rock"}, {"name": "みらいよち", "type": "psychic"}]
  },
  "ランクルス": {
    fast: [{"name": "めざめるパワー", "type": "fighting"}],
    charged: [{"name": "サイコショック", "type": "psychic"}, {"name": "シャドーボール", "type": "ghost"}]
  },
  "スワンナ": {
    fast: [{"name": "かぜおこし", "type": "flying"}],
    charged: [{"name": "アクアジェット", "type": "water"}, {"name": "そらをとぶ", "type": "flying"}]
  },
  "バイバニラ": {
    fast: [{"name": "おどろかす", "type": "ghost"}],
    charged: [{"name": "ゆきなだれ", "type": "ice", "legacy": true}, {"name": "ラスターカノン", "type": "steel"}]
  },
  "メブキジカ": {
    fast: [{"name": "だましうち", "type": "dark"}],
    charged: [{"name": "ワイルドボルト", "type": "electric"}, {"name": "くさわけ", "type": "grass"}]
  },
  "エモンガ": {
    fast: [{"name": "でんきショック", "type": "electric"}],
    charged: [{"name": "アクロバット", "type": "flying"}, {"name": "ほうでん", "type": "electric"}]
  },
  "シュバルゴ": {
    fast: [{"name": "むしくい", "type": "bug"}],
    charged: [{"name": "ドリルライナー", "type": "ground"}, {"name": "シェルブレード", "type": "water", "legacy": true}]
  },
  "モロバレル": {
    fast: [{"name": "おどろかす", "type": "ghost"}],
    charged: [{"name": "くさむすび", "type": "grass"}, {"name": "イカサマ", "type": "dark"}]
  },
  "ママンボウ": {
    fast: [{"name": "たきのぼり", "type": "water"}],
    charged: [{"name": "ハイドロポンプ", "type": "water"}, {"name": "ふぶき", "type": "ice"}]
  },
  "デンチュラ": {
    fast: [{"name": "ボルトチェンジ", "type": "electric"}],
    charged: [{"name": "ほうでん", "type": "electric"}, {"name": "とびかかる", "type": "bug"}]
  },
  "ナットレイ": {
    fast: [{"name": "タネマシンガン", "type": "grass"}],
    charged: [{"name": "パワーウィップ", "type": "grass"}, {"name": "かみなり", "type": "electric"}]
  },
  "ギギギアル": {
    fast: [{"name": "きんぞくおん", "type": "steel"}],
    charged: [{"name": "ミラーショット", "type": "steel"}, {"name": "ラスターカノン", "type": "steel"}]
  },
  "シビルドン": {
    fast: [{"name": "ボルトチェンジ", "type": "electric", "legacy": true}],
    charged: [{"name": "ドラゴンクロー", "type": "dragon"}, {"name": "１０まんボルト", "type": "electric"}]
  },
  "オーベム": {
    fast: [{"name": "ねんりき", "type": "psychic"}],
    charged: [{"name": "いわなだれ", "type": "rock"}, {"name": "あくのはどう", "type": "dark"}]
  },
  "シャンデラ": {
    fast: [{"name": "やきつくす", "type": "fire"}],
    charged: [{"name": "シャドーボール", "type": "ghost"}, {"name": "エナジーボール", "type": "grass"}]
  },
  "オノノクス": {
    fast: [{"name": "ドラゴンテール", "type": "dragon"}],
    charged: [{"name": "つじぎり", "type": "dark"}, {"name": "なみのり", "type": "water"}]
  },
  "ツンベアー": {
    fast: [{"name": "こなゆき", "type": "ice"}],
    charged: [{"name": "れいとうパンチ", "type": "ice"}, {"name": "アクアブレイク", "type": "water"}]
  },
  "フリージオ": {
    fast: [{"name": "こおりのつぶて", "type": "ice"}],
    charged: [{"name": "トリプルアクセル", "type": "ice"}, {"name": "つじぎり", "type": "dark"}]
  },
  "アギルダー": {
    fast: [{"name": "みずしゅりけん", "type": "water"}],
    charged: [{"name": "むしのさざめき", "type": "bug"}, {"name": "アシッドボム", "type": "poison"}]
  },
  "コジョンド": {
    fast: [{"name": "はっけい", "type": "fighting"}],
    charged: [{"name": "ぶんまわす", "type": "dark"}, {"name": "くさむすび", "type": "grass"}]
  },
  "クリムガン": {
    fast: [{"name": "ドラゴンテール", "type": "dragon"}],
    charged: [{"name": "つじぎり", "type": "dark"}, {"name": "がんせきふうじ", "type": "rock"}]
  },
  "ゴルーグ": {
    fast: [{"name": "どろかけ", "type": "ground"}],
    charged: [{"name": "シャドーパンチ", "type": "ghost"}, {"name": "ばくれつパンチ", "type": "fighting"}]
  },
  "バッフロン": {
    fast: [{"name": "マッドショット", "type": "ground"}],
    charged: [{"name": "ふみつけ", "type": "normal"}, {"name": "メガホーン", "type": "bug"}]
  },
  "ウォーグル": {
    fast: [{"name": "エアスラッシュ", "type": "flying"}],
    charged: [{"name": "そらをとぶ", "type": "flying"}, {"name": "インファイト", "type": "fighting"}]
  },
  "ヒスイウォーグル": {
    fast: [{"name": "エアスラッシュ", "type": "flying"}],
    charged: [{"name": "ブレイブバード", "type": "flying"}, {"name": "そらをとぶ", "type": "flying"}]
  },
  "クイタラン": {
    fast: [{"name": "ほのおのうず", "type": "fire"}],
    charged: [{"name": "かみなりパンチ", "type": "electric"}, {"name": "かえんほうしゃ", "type": "fire"}]
  },
  "アイアント": {
    fast: [{"name": "むしくい", "type": "bug"}],
    charged: [{"name": "シザークロス", "type": "bug"}, {"name": "ストーンエッジ", "type": "rock"}]
  },
  "ウルガモス": {
    fast: [{"name": "ほのおのうず", "type": "fire"}],
    charged: [{"name": "オーバーヒート", "type": "fire"}, {"name": "ぼうふう", "type": "flying"}]
  },
  "コバルオン": {
    fast: [{"name": "にどげり", "type": "fighting"}],
    charged: [{"name": "せいなるつるぎ", "type": "fighting", "legacy": true}, {"name": "ストーンエッジ", "type": "rock"}]
  },
  "テラキオン": {
    fast: [{"name": "にどげり", "type": "fighting"}],
    charged: [{"name": "せいなるつるぎ", "type": "fighting", "legacy": true}, {"name": "いわなだれ", "type": "rock"}]
  },
  "トルネロス(けしん)": {
    fast: [{"name": "エアスラッシュ", "type": "flying"}],
    charged: [{"name": "ぼうふう", "type": "flying"}, {"name": "くさむすび", "type": "grass"}]
  },
  "トルネロス(れいじゅう)": {
    fast: [{"name": "かぜおこし", "type": "flying"}],
    charged: [{"name": "こがらしあらし", "type": "flying", "legacy": true}, {"name": "ねっぷう", "type": "fire"}]
  },
  "ボルトロス(けしん)": {
    fast: [{"name": "でんきショック", "type": "electric"}],
    charged: [{"name": "かみなりパンチ", "type": "electric"}, {"name": "かわらわり", "type": "fighting"}]
  },
  "ボルトロス(れいじゅう)": {
    fast: [{"name": "ボルトチェンジ", "type": "electric"}],
    charged: [{"name": "かみなりあらし", "type": "electric", "legacy": true}, {"name": "きあいだま", "type": "fighting"}]
  },
  "レシラム": {
    fast: [{"name": "りゅうのいぶき", "type": "dragon"}],
    charged: [{"name": "クロスフレイム", "type": "fire", "legacy": true}, {"name": "りゅうせいぐん", "type": "dragon"}]
  },
  "ゼクロム": {
    fast: [{"name": "りゅうのいぶき", "type": "dragon"}],
    charged: [{"name": "かみくだく", "type": "dark"}, {"name": "ワイルドボルト", "type": "electric"}]
  },
  "ランドロス(けしん)": {
    fast: [{"name": "マッドショット", "type": "ground"}],
    charged: [{"name": "だいちのちから", "type": "ground"}, {"name": "いわなだれ", "type": "rock"}]
  },
  "ランドロス(れいじゅう)": {
    fast: [{"name": "マッドショット", "type": "ground"}],
    charged: [{"name": "ねっさのあらし", "type": "ground", "legacy": true}, {"name": "ストーンエッジ", "type": "rock"}]
  },
  "キュレム": {
    fast: [{"name": "りゅうのいぶき", "type": "dragon"}],
    charged: [{"name": "こごえるせかい", "type": "ice", "legacy": true}, {"name": "ドラゴンクロー", "type": "dragon"}]
  },
  "ブラックキュレム": {
    fast: [{"name": "ドラゴンテール", "type": "dragon"}],
    charged: [{"name": "クロスサンダー", "type": "electric"}, {"name": "フリーズボルト", "type": "ice"}]
  },
  "ホワイトキュレム": {
    fast: [{"name": "りゅうのいぶき", "type": "dragon"}],
    charged: [{"name": "クロスフレイム", "type": "fire"}, {"name": "コールドフレア", "type": "ice"}]
  },
  "ケルディオ(いつも)": {
    fast: [{"name": "どくづき", "type": "poison"}],
    charged: [{"name": "ハイドロポンプ", "type": "water"}, {"name": "せいなるつるぎ", "type": "fighting"}]
  },
  "ケルディオ(かくご)": {
    fast: [{"name": "けたぐり", "type": "fighting"}],
    charged: [{"name": "しんぴのつるぎ", "type": "fighting", "legacy": true}, {"name": "アクアジェット", "type": "water"}]
  },
  "メロエッタ(ボイス)": {
    fast: [{"name": "ねんりき", "type": "psychic"}],
    charged: [{"name": "サイコショック", "type": "psychic"}, {"name": "マジカルシャイン", "type": "fairy"}]
  },
  "ゲノセクト": {
    fast: [{"name": "れんぞくぎり", "type": "bug"}],
    charged: [{"name": "シザークロス", "type": "bug"}, {"name": "テクノバスター", "type": "normal", "legacy": true}]
  },
  "ビビヨン": {
    fast: [{"name": "かぜおこし", "type": "flying"}],
    charged: [{"name": "エナジーボール", "type": "grass"}, {"name": "ぼうふう", "type": "flying"}]
  },
  "カエンジシ": {
    fast: [{"name": "やきつくす", "type": "fire"}],
    charged: [{"name": "ニトロチャージ", "type": "fire"}, {"name": "あくのはどう", "type": "dark"}]
  },
  "ゴーゴート": {
    fast: [{"name": "つるのムチ", "type": "grass"}],
    charged: [{"name": "リーフブレード", "type": "grass"}, {"name": "いわなだれ", "type": "rock"}]
  },
  "ゴロンダ": {
    fast: [{"name": "からてチョップ", "type": "fighting"}],
    charged: [{"name": "インファイト", "type": "fighting"}, {"name": "つじぎり", "type": "dark"}]
  },
  "トリミアン": {
    fast: [{"name": "ふいうち", "type": "dark"}],
    charged: [{"name": "なみのり", "type": "water"}, {"name": "くさむすび", "type": "grass"}]
  },
  "ニャオニクス": {
    fast: [{"name": "ねんりき", "type": "psychic"}],
    charged: [{"name": "シャドーボール", "type": "ghost"}, {"name": "エナジーボール", "type": "grass"}]
  },
  "フレフワン": {
    fast: [{"name": "ようせいのかぜ", "type": "fairy"}],
    charged: [{"name": "サイコショック", "type": "psychic"}, {"name": "ムーンフォース", "type": "fairy"}]
  },
  "ペロリーム": {
    fast: [{"name": "ようせいのかぜ", "type": "fairy"}],
    charged: [{"name": "じゃれつく", "type": "fairy"}, {"name": "エナジーボール", "type": "grass"}]
  },
  "ガメノデス": {
    fast: [{"name": "れんぞくぎり", "type": "bug"}],
    charged: [{"name": "クロスチョップ", "type": "fighting"}, {"name": "ストーンエッジ", "type": "rock"}]
  },
  "ドラミドロ": {
    fast: [{"name": "ようかいえき", "type": "poison"}],
    charged: [{"name": "アクアテール", "type": "water"}, {"name": "げきりん", "type": "dragon"}]
  },
  "ブロスター": {
    fast: [{"name": "みずでっぽう", "type": "water"}],
    charged: [{"name": "クラブハンマー", "type": "water"}, {"name": "れいとうビーム", "type": "ice"}]
  },
  "エレザード": {
    fast: [{"name": "ボルトチェンジ", "type": "electric"}],
    charged: [{"name": "ワイドブレイカー", "type": "dragon"}, {"name": "パラボラチャージ", "type": "electric"}]
  },
  "ガチゴラス": {
    fast: [{"name": "ドラゴンテール", "type": "dragon"}],
    charged: [{"name": "がんせきふうじ", "type": "rock"}, {"name": "かみくだく", "type": "dark"}]
  },
  "アマルルガ": {
    fast: [{"name": "こなゆき", "type": "ice"}],
    charged: [{"name": "ウェザーボール", "type": "ice"}, {"name": "メテオビーム", "type": "rock"}]
  },
  "ニンフィア": {
    fast: [{"name": "ようせいのかぜ", "type": "fairy"}],
    charged: [{"name": "サイコショック", "type": "psychic", "legacy": true}, {"name": "シャドーボール", "type": "ghost"}]
  },
  "ルチャブル": {
    fast: [{"name": "けたぐり", "type": "fighting"}],
    charged: [{"name": "フライングプレス", "type": "fighting"}, {"name": "つばめがえし", "type": "flying"}]
  },
  "デデンネ": {
    fast: [{"name": "でんきショック", "type": "electric"}],
    charged: [{"name": "ほうでん", "type": "electric"}, {"name": "じゃれつく", "type": "fairy"}]
  },
  "メレシー": {
    fast: [{"name": "いわおとし", "type": "rock"}],
    charged: [{"name": "いわなだれ", "type": "rock"}, {"name": "ムーンフォース", "type": "fairy"}]
  },
  "ヌメルゴン": {
    fast: [{"name": "りゅうのいぶき", "type": "dragon"}],
    charged: [{"name": "アクアテール", "type": "water"}, {"name": "かみなりパンチ", "type": "electric", "legacy": true}]
  },
  "クレッフィ": {
    fast: [{"name": "おどろかす", "type": "ghost"}],
    charged: [{"name": "イカサマ", "type": "dark"}, {"name": "じゃれつく", "type": "fairy"}]
  },
  "パンプジン": {
    fast: [{"name": "やきつくす", "type": "fire"}],
    charged: [{"name": "シャドーボール", "type": "ghost"}, {"name": "タネばくだん", "type": "grass"}]
  },
  "クレベース": {
    fast: [{"name": "こおりのキバ", "type": "ice"}],
    charged: [{"name": "ゆきなだれ", "type": "ice"}, {"name": "のしかかり", "type": "normal"}]
  },
  "ヒスイクレベース": {
    fast: [{"name": "こなゆき", "type": "ice"}],
    charged: [{"name": "いわなだれ", "type": "rock"}, {"name": "こごえるかぜ", "type": "ice"}]
  },
  "オンバーン": {
    fast: [{"name": "エアスラッシュ", "type": "flying"}],
    charged: [{"name": "ねっぷう", "type": "fire"}, {"name": "ぼうふう", "type": "flying"}]
  },
  "ゼルネアス": {
    fast: [{"name": "ジオコントロール", "type": "fairy", "legacy": true}],
    charged: [{"name": "インファイト", "type": "fighting"}, {"name": "ムーンフォース", "type": "fairy"}]
  },
  "イベルタル": {
    fast: [{"name": "ふいうち", "type": "dark"}],
    charged: [{"name": "あくのはどう", "type": "dark"}, {"name": "デスウイング", "type": "flying", "legacy": true}]
  },
  "ジガルデ(10%)": {
    fast: [{"name": "ドラゴンテール", "type": "dragon"}],
    charged: [{"name": "かみくだく", "type": "dark"}, {"name": "じしん", "type": "ground"}]
  },
  "ジガルデ": {
    fast: [{"name": "ドラゴンテール", "type": "dragon"}],
    charged: [{"name": "かみくだく", "type": "dark"}, {"name": "じしん", "type": "ground"}]
  },
  "ディアンシー": {
    fast: [{"name": "いわおとし", "type": "rock"}],
    charged: [{"name": "いわなだれ", "type": "rock"}, {"name": "ムーンフォース", "type": "fairy"}]
  },
  "フーパ": {
    fast: [{"name": "ねんりき", "type": "psychic"}],
    charged: [{"name": "シャドーボール", "type": "ghost"}, {"name": "サイコキネシス", "type": "psychic"}]
  },
  "フーパ(ときはなたれし)": {
    fast: [{"name": "ねんりき", "type": "psychic"}],
    charged: [{"name": "シャドーボール", "type": "ghost"}, {"name": "あくのはどう", "type": "dark"}]
  },
  "ボルケニオン": {
    fast: [{"name": "やきつくす", "type": "fire"}],
    charged: [{"name": "ねっとう", "type": "water"}, {"name": "オーバーヒート", "type": "fire"}]
  },
  "ヒスイジュナイパー": {
    fast: [{"name": "サイコカッター", "type": "psychic"}],
    charged: [{"name": "エナジーボール", "type": "grass"}, {"name": "はどうだん", "type": "fighting"}]
  },
  "ガオガエン": {
    fast: [{"name": "ほのおのキバ", "type": "fire"}],
    charged: [{"name": "ぶんまわす", "type": "dark"}, {"name": "ブラストバーン", "type": "fire", "legacy": true}]
  },
  "ドデカバシ": {
    fast: [{"name": "つつく", "type": "flying"}],
    charged: [{"name": "くちばしキャノン", "type": "flying", "legacy": true}, {"name": "ドリルくちばし", "type": "flying"}]
  },
  "デカグース": {
    fast: [{"name": "かみつく", "type": "dark"}],
    charged: [{"name": "がんせきふうじ", "type": "rock"}, {"name": "かみくだく", "type": "dark"}]
  },
  "クワガノン": {
    fast: [{"name": "ボルトチェンジ", "type": "electric", "legacy": true}],
    charged: [{"name": "シザークロス", "type": "bug"}, {"name": "そらをとぶ", "type": "flying"}]
  },
  "ケケンカニ": {
    fast: [{"name": "あわ", "type": "water"}],
    charged: [{"name": "れいとうパンチ", "type": "ice"}, {"name": "かわらわり", "type": "fighting"}]
  },
  "オドリドリ(めらめら)": {
    fast: [{"name": "エアスラッシュ", "type": "flying"}],
    charged: [{"name": "エアカッター", "type": "flying"}, {"name": "ぼうふう", "type": "flying"}]
  },
  "オドリドリ(ふらふら)": {
    fast: [{"name": "エアスラッシュ", "type": "flying"}],
    charged: [{"name": "エアカッター", "type": "flying"}, {"name": "ぼうふう", "type": "flying"}]
  },
  "オドリドリ(ぱちぱち)": {
    fast: [{"name": "エアスラッシュ", "type": "flying"}],
    charged: [{"name": "エアカッター", "type": "flying"}, {"name": "ぼうふう", "type": "flying"}]
  },
  "オドリドリ(まいまい)": {
    fast: [{"name": "エアスラッシュ", "type": "flying"}],
    charged: [{"name": "エアカッター", "type": "flying"}, {"name": "ぼうふう", "type": "flying"}]
  },
  "アブリボン": {
    fast: [{"name": "ようせいのかぜ", "type": "fairy"}],
    charged: [{"name": "マジカルシャイン", "type": "fairy"}, {"name": "むしのさざめき", "type": "bug"}]
  },
  "ルガルガン(たそがれ)": {
    fast: [{"name": "ふいうち", "type": "dark"}],
    charged: [{"name": "ストーンエッジ", "type": "rock"}, {"name": "くさわけ", "type": "grass"}]
  },
  "ルガルガン(まひる)": {
    fast: [{"name": "ふいうち", "type": "dark"}],
    charged: [{"name": "ドリルライナー", "type": "ground"}, {"name": "ストーンエッジ", "type": "rock"}]
  },
  "ルガルガン(まよなか)": {
    fast: [{"name": "カウンター", "type": "fighting"}],
    charged: [{"name": "ストーンエッジ", "type": "rock"}, {"name": "くさわけ", "type": "grass"}]
  },
  "バンバドロ": {
    fast: [{"name": "どろかけ", "type": "ground"}],
    charged: [{"name": "のしかかり", "type": "normal"}, {"name": "じしん", "type": "ground"}]
  },
  "オニシズクモ": {
    fast: [{"name": "むしくい", "type": "bug"}],
    charged: [{"name": "みずのはどう", "type": "water"}, {"name": "バブルこうせん", "type": "water"}]
  },
  "ラランテス": {
    fast: [{"name": "このは", "type": "grass"}],
    charged: [{"name": "リーフブレード", "type": "grass"}, {"name": "ばかぢから", "type": "fighting"}]
  },
  "マシェード": {
    fast: [{"name": "おどろかす", "type": "ghost"}],
    charged: [{"name": "タネばくだん", "type": "grass"}, {"name": "ムーンフォース", "type": "fairy"}]
  },
  "エンニュート": {
    fast: [{"name": "やきつくす", "type": "fire"}],
    charged: [{"name": "どくどくのキバ", "type": "poison"}, {"name": "りゅうのはどう", "type": "dragon"}]
  },
  "キテルグマ": {
    fast: [{"name": "シャドークロー", "type": "ghost"}],
    charged: [{"name": "ばかぢから", "type": "fighting"}, {"name": "ふみつけ", "type": "normal"}]
  },
  "アマージョ": {
    fast: [{"name": "マジカルリーフ", "type": "grass"}],
    charged: [{"name": "トリプルアクセル", "type": "ice"}, {"name": "とびひざげり", "type": "fighting", "legacy": true}]
  },
  "キュワワー": {
    fast: [{"name": "つるのムチ", "type": "grass"}],
    charged: [{"name": "くさむすび", "type": "grass"}, {"name": "ドレインキッス", "type": "fairy"}]
  },
  "ヤレユータン": {
    fast: [{"name": "ねんりき", "type": "psychic"}],
    charged: [{"name": "ぶんまわす", "type": "dark"}, {"name": "くさわけ", "type": "grass"}]
  },
  "ナゲツケサル": {
    fast: [{"name": "カウンター", "type": "fighting"}],
    charged: [{"name": "ぶんまわす", "type": "dark"}, {"name": "ばかぢから", "type": "fighting"}]
  },
  "グソクムシャ": {
    fast: [{"name": "れんぞくぎり", "type": "bug"}],
    charged: [{"name": "シザークロス", "type": "bug"}, {"name": "アクアジェット", "type": "water"}]
  },
  "シロデスナ": {
    fast: [{"name": "おどろかす", "type": "ghost"}],
    charged: [{"name": "シャドーボール", "type": "ghost"}, {"name": "すなじごく", "type": "ground"}]
  },
  "ネッコアラ": {
    fast: [{"name": "ころがる", "type": "rock"}],
    charged: [{"name": "しっぺがえし", "type": "dark"}, {"name": "じならし", "type": "ground"}]
  },
  "バクガメス": {
    fast: [{"name": "やきつくす", "type": "fire"}],
    charged: [{"name": "ぶんまわす", "type": "dark"}, {"name": "ドラゴンクロー", "type": "dragon"}]
  },
  "トゲデマル": {
    fast: [{"name": "でんきショック", "type": "electric"}],
    charged: [{"name": "とどめばり", "type": "bug"}, {"name": "ワイルドボルト", "type": "electric"}]
  },
  "ハギギシリ": {
    fast: [{"name": "ねんりき", "type": "psychic"}],
    charged: [{"name": "アクアテール", "type": "water"}, {"name": "サイコファング", "type": "psychic"}]
  },
  "ジジーロン": {
    fast: [{"name": "りゅうのいぶき", "type": "dragon"}],
    charged: [{"name": "スピードスター", "type": "normal"}, {"name": "りゅうのはどう", "type": "dragon"}]
  },
  "ダダリン": {
    fast: [{"name": "シャドークロー", "type": "ghost"}],
    charged: [{"name": "パワーウィップ", "type": "grass"}, {"name": "ぶんまわす", "type": "dark"}]
  },
  "ジャラランガ": {
    fast: [{"name": "ドラゴンテール", "type": "dragon"}],
    charged: [{"name": "スケイルノイズ", "type": "dragon", "legacy": true}, {"name": "はやてがえし", "type": "fighting"}]
  },
  "カプ・コケコ": {
    fast: [{"name": "ボルトチェンジ", "type": "electric"}],
    charged: [{"name": "１０まんボルト", "type": "electric"}, {"name": "しぜんのいかり", "type": "fairy", "legacy": true}]
  },
  "カプ・テテフ": {
    fast: [{"name": "おどろかす", "type": "ghost"}],
    charged: [{"name": "しぜんのいかり", "type": "fairy", "legacy": true}, {"name": "サイコショック", "type": "psychic"}]
  },
  "カプ・ブルル": {
    fast: [{"name": "タネマシンガン", "type": "grass"}],
    charged: [{"name": "くさむすび", "type": "grass"}, {"name": "しぜんのいかり", "type": "fairy", "legacy": true}]
  },
  "カプ・レヒレ": {
    fast: [{"name": "みずでっぽう", "type": "water"}],
    charged: [{"name": "なみのり", "type": "water"}, {"name": "しぜんのいかり", "type": "fairy", "legacy": true}]
  },
  "ソルガレオ": {
    fast: [{"name": "ほのおのうず", "type": "fire"}],
    charged: [{"name": "サイコファング", "type": "psychic"}, {"name": "アイアンヘッド", "type": "steel"}]
  },
  "ルナアーラ": {
    fast: [{"name": "シャドークロー", "type": "ghost"}],
    charged: [{"name": "シャドーボール", "type": "ghost"}, {"name": "ムーンフォース", "type": "fairy"}]
  },
  "ウツロイド": {
    fast: [{"name": "どくづき", "type": "poison"}],
    charged: [{"name": "パワージェム", "type": "rock"}, {"name": "ヘドロばくだん", "type": "poison"}]
  },
  "マッシブーン": {
    fast: [{"name": "カウンター", "type": "fighting"}],
    charged: [{"name": "ばかぢから", "type": "fighting"}, {"name": "とびかかる", "type": "bug"}]
  },
  "フェローチェ": {
    fast: [{"name": "むしくい", "type": "bug"}],
    charged: [{"name": "きあいだま", "type": "fighting"}, {"name": "むしのさざめき", "type": "bug"}]
  },
  "デンジュモク": {
    fast: [{"name": "でんきショック", "type": "electric"}],
    charged: [{"name": "ほうでん", "type": "electric"}, {"name": "パワーウィップ", "type": "grass"}]
  },
  "テッカグヤ": {
    fast: [{"name": "エアスラッシュ", "type": "flying"}],
    charged: [{"name": "のしかかり", "type": "normal"}, {"name": "アイアンヘッド", "type": "steel"}]
  },
  "カミツルギ": {
    fast: [{"name": "れんぞくぎり", "type": "bug"}],
    charged: [{"name": "リーフブレード", "type": "grass"}, {"name": "せいなるつるぎ", "type": "fighting"}]
  },
  "ネクロズマ": {
    fast: [{"name": "サイコカッター", "type": "psychic"}],
    charged: [{"name": "あくのはどう", "type": "dark"}, {"name": "みらいよち", "type": "psychic"}]
  },
  "ネクロズマ(あかつき)": {
    fast: [{"name": "シャドークロー", "type": "ghost"}],
    charged: [{"name": "あくのはどう", "type": "dark"}, {"name": "シャドーレイ", "type": "ghost"}]
  },
  "ネクロズマ(たそがれ)": {
    fast: [{"name": "シャドークロー", "type": "ghost"}],
    charged: [{"name": "あくのはどう", "type": "dark"}, {"name": "メテオドライブ", "type": "steel"}]
  },
  "マーシャドー": {
    fast: [{"name": "シャドークロー", "type": "ghost"}],
    charged: [{"name": "インファイト", "type": "fighting"}, {"name": "れいとうパンチ", "type": "ice"}]
  },
  "アーゴヨン": {
    fast: [{"name": "どくづき", "type": "poison"}],
    charged: [{"name": "ドラゴンクロー", "type": "dragon"}, {"name": "ヘドロばくだん", "type": "poison"}]
  },
  "ツンデツンデ": {
    fast: [{"name": "いわおとし", "type": "rock"}],
    charged: [{"name": "ストーンエッジ", "type": "rock"}, {"name": "ラスターカノン", "type": "steel"}]
  },
  "ズガドーン": {
    fast: [{"name": "やきつくす", "type": "fire"}],
    charged: [{"name": "ビックリヘッド", "type": "fire", "legacy": true}, {"name": "シャドーボール", "type": "ghost"}]
  },
  "ゼラオラ": {
    fast: [{"name": "ボルトチェンジ", "type": "electric"}],
    charged: [{"name": "プラズマフィスト", "type": "electric"}, {"name": "ワイルドボルト", "type": "electric"}]
  },
  "メルメタル": {
    fast: [{"name": "でんきショック", "type": "electric"}],
    charged: [{"name": "ダブルパンツァー", "type": "steel", "legacy": true}, {"name": "ばくれつパンチ", "type": "fighting"}]
  },
  "ゴリランダー": {
    fast: [{"name": "はっぱカッター", "type": "grass"}],
    charged: [{"name": "ドラムアタック", "type": "grass"}, {"name": "だいちのちから", "type": "ground"}]
  },
  "エースバーン": {
    fast: [{"name": "ほのおのうず", "type": "fire"}],
    charged: [{"name": "ブラストバーン", "type": "fire", "legacy": true}, {"name": "かえんボール", "type": "fire"}]
  },
  "インテレオン": {
    fast: [{"name": "みずでっぽう", "type": "water"}],
    charged: [{"name": "ねらいうち", "type": "water"}, {"name": "シャドーボール", "type": "ghost"}]
  },
  "イオルブ": {
    fast: [{"name": "ねんりき", "type": "psychic"}],
    charged: [{"name": "サイコショック", "type": "psychic"}, {"name": "むしのさざめき", "type": "bug"}]
  },
  "ワタシラガ": {
    fast: [{"name": "タネマシンガン", "type": "grass"}],
    charged: [{"name": "エナジーボール", "type": "grass"}, {"name": "くさむすび", "type": "grass"}]
  },
  "バイウールー": {
    fast: [{"name": "にどげり", "type": "fighting"}],
    charged: [{"name": "のしかかり", "type": "normal"}, {"name": "しっぺがえし", "type": "dark"}]
  },
  "パルスワン": {
    fast: [{"name": "スパーク", "type": "electric"}],
    charged: [{"name": "かみくだく", "type": "dark"}, {"name": "かみなり", "type": "electric"}]
  },
  "セキタンザン": {
    fast: [{"name": "ほのおのうず", "type": "fire"}],
    charged: [{"name": "いわなだれ", "type": "rock"}, {"name": "ニトロチャージ", "type": "fire"}]
  },
  "アップリュー": {
    fast: [{"name": "りゅうのいぶき", "type": "dragon"}],
    charged: [{"name": "タネばくだん", "type": "grass"}, {"name": "りゅうのはどう", "type": "dragon"}]
  },
  "タルップル": {
    fast: [{"name": "おどろかす", "type": "ghost"}],
    charged: [{"name": "エナジーボール", "type": "grass"}, {"name": "げきりん", "type": "dragon"}]
  },
  "サダイジャ": {
    fast: [{"name": "どろかけ", "type": "ground"}],
    charged: [{"name": "だいちのちから", "type": "ground"}, {"name": "まきつく", "type": "normal"}]
  },
  "カマスジョー": {
    fast: [{"name": "つつく", "type": "flying"}],
    charged: [{"name": "アクアジェット", "type": "water"}, {"name": "インファイト", "type": "fighting"}]
  },
  "ストリンダー": {
    fast: [{"name": "ようかいえき", "type": "poison"}],
    charged: [{"name": "ワイルドボルト", "type": "electric"}, {"name": "グロウパンチ", "type": "fighting"}]
  },
  "マルヤクデ": {
    fast: [{"name": "ひのこ", "type": "fire"}],
    charged: [{"name": "とびかかる", "type": "bug"}, {"name": "ねっぷう", "type": "fire"}]
  },
  "オトスパス": {
    fast: [{"name": "たきのぼり", "type": "water"}],
    charged: [{"name": "ばかぢから", "type": "fighting"}, {"name": "れいとうパンチ", "type": "ice"}]
  },
  "ポットデス": {
    fast: [{"name": "たたりめ", "type": "ghost"}],
    charged: [{"name": "シャドーボール", "type": "ghost"}, {"name": "あくのはどう", "type": "dark"}]
  },
  "ブリムオン": {
    fast: [{"name": "サイコカッター", "type": "psychic"}],
    charged: [{"name": "サイコショック", "type": "psychic"}, {"name": "パワーウィップ", "type": "grass"}]
  },
  "オーロンゲ": {
    fast: [{"name": "ふいうち", "type": "dark"}],
    charged: [{"name": "イカサマ", "type": "dark"}, {"name": "じゃれつく", "type": "fairy"}]
  },
  "タチフサグマ": {
    fast: [{"name": "カウンター", "type": "fighting"}],
    charged: [{"name": "つじぎり", "type": "dark"}, {"name": "クロスチョップ", "type": "fighting"}]
  },
  "ニャイキング": {
    fast: [{"name": "シャドークロー", "type": "ghost"}],
    charged: [{"name": "インファイト", "type": "fighting"}, {"name": "くさわけ", "type": "grass"}]
  },
  "サニゴーン": {
    fast: [{"name": "おどろかす", "type": "ghost"}],
    charged: [{"name": "ナイトヘッド", "type": "ghost"}, {"name": "パワージェム", "type": "rock"}]
  },
  "ネギガナイト": {
    fast: [{"name": "れんぞくぎり", "type": "bug"}],
    charged: [{"name": "リーフブレード", "type": "grass"}, {"name": "インファイト", "type": "fighting"}]
  },
  "デスバーン": {
    fast: [{"name": "シャドークロー", "type": "ghost"}],
    charged: [{"name": "シャドーボール", "type": "ghost"}, {"name": "がんせきふうじ", "type": "rock"}]
  },
  "タイレーツ": {
    fast: [{"name": "カウンター", "type": "fighting"}],
    charged: [{"name": "ばかぢから", "type": "fighting"}, {"name": "メガホーン", "type": "bug"}]
  },
  "モスノウ": {
    fast: [{"name": "こなゆき", "type": "ice"}],
    charged: [{"name": "こごえるかぜ", "type": "ice"}, {"name": "むしのさざめき", "type": "bug"}]
  },
  "イシヘンジン": {
    fast: [{"name": "いわおとし", "type": "rock"}],
    charged: [{"name": "いわなだれ", "type": "rock"}, {"name": "ふみつけ", "type": "normal"}]
  },
  "イエッサン": {
    fast: [{"name": "じんつうりき", "type": "psychic"}],
    charged: [{"name": "エナジーボール", "type": "grass"}, {"name": "サイコキネシス", "type": "psychic"}]
  },
  "ドラパルト": {
    fast: [{"name": "ドラゴンテール", "type": "dragon"}],
    charged: [{"name": "シャドーボール", "type": "ghost"}, {"name": "げきりん", "type": "dragon"}]
  },
  "ザシアン(けんのおう)": {
    fast: [{"name": "メタルクロー", "type": "steel"}],
    charged: [{"name": "インファイト", "type": "fighting"}, {"name": "きょじゅうざん", "type": "steel"}]
  },
  "ザシアン(れきせん)": {
    fast: [{"name": "バークアウト", "type": "dark"}],
    charged: [{"name": "ワイルドボルト", "type": "electric"}, {"name": "インファイト", "type": "fighting"}]
  },
  "ザマゼンタ(たてのおう)": {
    fast: [{"name": "こおりのキバ", "type": "ice"}],
    charged: [{"name": "インファイト", "type": "fighting"}, {"name": "きょじゅうだん", "type": "steel"}]
  },
  "ザマゼンタ(れきせん)": {
    fast: [{"name": "バークアウト", "type": "dark"}],
    charged: [{"name": "インファイト", "type": "fighting"}, {"name": "かみくだく", "type": "dark"}]
  },
  "ムゲンダイナ": {
    fast: [{"name": "ドラゴンテール", "type": "dragon"}],
    charged: [{"name": "ダイマックスほう", "type": "dragon", "legacy": true}, {"name": "ヘドロばくだん", "type": "poison"}]
  },
  "ウーラオス(れんげき)": {
    fast: [{"name": "カウンター", "type": "fighting"}],
    charged: [{"name": "アクアジェット", "type": "water"}, {"name": "ばくれつパンチ", "type": "fighting"}]
  },
  "ウーラオス(いちげき)": {
    fast: [{"name": "ふいうち", "type": "dark"}],
    charged: [{"name": "かわらわり", "type": "fighting"}, {"name": "ばくれつパンチ", "type": "fighting"}]
  },
  "ザルード": {
    fast: [{"name": "つるのムチ", "type": "grass"}],
    charged: [{"name": "エナジーボール", "type": "grass"}, {"name": "あくのはどう", "type": "dark"}]
  },
  "レジエレキ": {
    fast: [{"name": "ボルトチェンジ", "type": "electric"}],
    charged: [{"name": "サンダープリズン", "type": "electric", "legacy": true}, {"name": "はかいこうせん", "type": "normal"}]
  },
  "レジドラゴ": {
    fast: [{"name": "りゅうのいぶき", "type": "dragon", "legacy": true}],
    charged: [{"name": "ドラゴンエナジー", "type": "dragon", "legacy": true}, {"name": "はさむ", "type": "normal"}]
  },
  "アヤシシ": {
    fast: [{"name": "ねんりき", "type": "psychic"}],
    charged: [{"name": "ふみつけ", "type": "normal"}, {"name": "ワイルドボルト", "type": "electric"}]
  },
  "バサギリ": {
    fast: [{"name": "れんぞくぎり", "type": "bug"}],
    charged: [{"name": "シザークロス", "type": "bug"}, {"name": "いわなだれ", "type": "rock"}]
  },
  "ガチグマ": {
    fast: [{"name": "たいあたり", "type": "normal"}],
    charged: [{"name": "スピードスター", "type": "normal"}, {"name": "１０まんばりき", "type": "ground", "legacy": true}]
  },
  "オオニューラ": {
    fast: [{"name": "シャドークロー", "type": "ghost"}],
    charged: [{"name": "インファイト", "type": "fighting"}, {"name": "シザークロス", "type": "bug"}]
  },
  "ハリーマン": {
    fast: [{"name": "どくばり", "type": "poison"}],
    charged: [{"name": "アクアテール", "type": "water"}, {"name": "シャドーボール", "type": "ghost"}]
  },
  "ラブトロス(けしん)": {
    fast: [{"name": "ようせいのかぜ", "type": "fairy"}],
    charged: [{"name": "そらをとぶ", "type": "flying"}, {"name": "マジカルシャイン", "type": "fairy"}]
  },
  "ラブトロス(れいじゅう)": {
    fast: [{"name": "ようせいのかぜ", "type": "fairy"}],
    charged: [{"name": "マジカルフレイム", "type": "fire"}, {"name": "ムーンフォース", "type": "fairy"}]
  },
  "マスカーニャ": {
    fast: [{"name": "このは", "type": "grass"}],
    charged: [{"name": "ハードプラント", "type": "grass", "legacy": true}, {"name": "つじぎり", "type": "dark"}]
  },
  "ウェーニバル": {
    fast: [{"name": "けたぐり", "type": "fighting"}],
    charged: [{"name": "インファイト", "type": "fighting"}, {"name": "ハイドロカノン", "type": "water", "legacy": true}]
  },
  "パフュートン": {
    fast: [{"name": "どろかけ", "type": "ground", "legacy": true}],
    charged: [{"name": "のしかかり", "type": "normal"}, {"name": "くさわけ", "type": "grass"}]
  },
  "ワナイダー": {
    fast: [{"name": "シャドークロー", "type": "ghost"}],
    charged: [{"name": "とびかかる", "type": "bug"}, {"name": "がんせきふうじ", "type": "rock"}]
  },
  "エクスレッグ": {
    fast: [{"name": "ふいうち", "type": "dark"}],
    charged: [{"name": "シザークロス", "type": "bug"}, {"name": "くさわけ", "type": "grass"}]
  },
  "パーモット": {
    fast: [{"name": "でんきショック", "type": "electric"}],
    charged: [{"name": "かわらわり", "type": "fighting", "legacy": true}, {"name": "ワイルドボルト", "type": "electric"}]
  },
  "イッカネズミ": {
    fast: [{"name": "マッドショット", "type": "ground"}],
    charged: [{"name": "スピードスター", "type": "normal"}, {"name": "かみくだく", "type": "dark"}]
  },
  "バウッツェル": {
    fast: [{"name": "あまえる", "type": "fairy"}],
    charged: [{"name": "サイコファング", "type": "psychic"}, {"name": "じゃれつく", "type": "fairy"}]
  },
  "オリーヴァ": {
    fast: [{"name": "マジカルリーフ", "type": "grass"}],
    charged: [{"name": "だいちのちから", "type": "ground"}, {"name": "くさわけ", "type": "grass"}]
  },
  "イキリンコ": {
    fast: [{"name": "つつく", "type": "flying"}],
    charged: [{"name": "ブレイブバード", "type": "flying"}, {"name": "そらをとぶ", "type": "flying"}]
  },
  "キョジオーン": {
    fast: [{"name": "マッドショット", "type": "ground"}],
    charged: [{"name": "がんせきふうじ", "type": "rock"}, {"name": "ロックブラスト", "type": "rock"}]
  },
  "グレンアルマ": {
    fast: [{"name": "やきつくす", "type": "fire"}],
    charged: [{"name": "サイコショック", "type": "psychic"}, {"name": "ねっぷう", "type": "fire"}]
  },
  "ソウブレイズ": {
    fast: [{"name": "やきつくす", "type": "fire"}],
    charged: [{"name": "シャドーボール", "type": "ghost"}, {"name": "ねっぷう", "type": "fire"}]
  },
  "ハラバリー": {
    fast: [{"name": "でんきショック", "type": "electric"}],
    charged: [{"name": "でんじほう", "type": "electric"}, {"name": "パラボラチャージ", "type": "electric"}]
  },
  "タイカイデン": {
    fast: [{"name": "でんきショック", "type": "electric"}],
    charged: [{"name": "アクロバット", "type": "flying"}, {"name": "つばめがえし", "type": "flying"}]
  },
  "タギングル": {
    fast: [{"name": "どろかけ", "type": "ground"}],
    charged: [{"name": "どくどくのキバ", "type": "poison"}, {"name": "ヘドロばくだん", "type": "poison"}]
  },
  "リククラゲ": {
    fast: [{"name": "どろかけ", "type": "ground"}],
    charged: [{"name": "タネばくだん", "type": "grass"}, {"name": "だいちのちから", "type": "ground"}]
  },
  "ガケガニ": {
    fast: [{"name": "どろかけ", "type": "ground"}],
    charged: [{"name": "じならし", "type": "ground"}, {"name": "がんせきふうじ", "type": "rock"}]
  },
  "クエスパトラ": {
    fast: [{"name": "ねんりき", "type": "psychic"}],
    charged: [{"name": "サイコショック", "type": "psychic"}, {"name": "マジカルシャイン", "type": "fairy"}]
  },
  "デカヌチャン": {
    fast: [{"name": "ようせいのかぜ", "type": "fairy"}],
    charged: [{"name": "デカハンマー", "type": "steel", "legacy": true}, {"name": "じならし", "type": "ground"}]
  },
  "ウミトリオ": {
    fast: [{"name": "どろかけ", "type": "ground"}],
    charged: [{"name": "アクアブレイク", "type": "water"}, {"name": "なみのり", "type": "water"}]
  },
  "オトシドリ": {
    fast: [{"name": "ふいうち", "type": "dark"}],
    charged: [{"name": "そらをとぶ", "type": "flying"}, {"name": "がんせきふうじ", "type": "rock"}]
  },
  "ブロロローム": {
    fast: [{"name": "きんぞくおん", "type": "steel"}],
    charged: [{"name": "オーバーヒート", "type": "fire"}, {"name": "ジャイロボール", "type": "steel"}]
  },
  "ミミズズ": {
    fast: [{"name": "どろかけ", "type": "ground"}],
    charged: [{"name": "がんせきふうじ", "type": "rock"}, {"name": "じしん", "type": "ground"}]
  },
  "キラフロル": {
    fast: [{"name": "いわおとし", "type": "rock"}],
    charged: [{"name": "メテオビーム", "type": "rock"}, {"name": "パワージェム", "type": "rock"}]
  },
  "ハカドッグ": {
    fast: [{"name": "したでなめる", "type": "ghost"}],
    charged: [{"name": "シャドーボール", "type": "ghost"}, {"name": "サイコファング", "type": "psychic"}]
  },
  "カラミンゴ": {
    fast: [{"name": "つばさでうつ", "type": "flying"}],
    charged: [{"name": "はやてがえし", "type": "fighting"}, {"name": "ブレイブバード", "type": "flying"}]
  },
  "ハルクジラ": {
    fast: [{"name": "こなゆき", "type": "ice"}],
    charged: [{"name": "つららばり", "type": "ice"}, {"name": "ばかぢから", "type": "fighting"}]
  },
  "ヘイラッシャ": {
    fast: [{"name": "たきのぼり", "type": "water"}],
    charged: [{"name": "なみのり", "type": "water"}, {"name": "げきりん", "type": "dragon"}]
  },
  "シャリタツ": {
    fast: [{"name": "みずでっぽう", "type": "water"}],
    charged: [{"name": "なみのり", "type": "water"}, {"name": "げきりん", "type": "dragon"}]
  },
  "ドドゲザン": {
    fast: [{"name": "きんぞくおん", "type": "steel"}],
    charged: [{"name": "イカサマ", "type": "dark"}, {"name": "アイアンヘッド", "type": "steel"}]
  },
  "セグレイブ": {
    fast: [{"name": "りゅうのいぶき", "type": "dragon"}],
    charged: [{"name": "きょけんとつげき", "type": "dragon", "legacy": true}, {"name": "ゆきなだれ", "type": "ice"}]
  },
  "サーフゴー": {
    fast: [{"name": "たたりめ", "type": "ghost"}],
    charged: [{"name": "シャドーボール", "type": "ghost"}, {"name": "パワージェム", "type": "rock"}]
  },
  "チャデス": {
    fast: [{"name": "おどろかす", "type": "ghost"}],
    charged: [{"name": "シャドーボール", "type": "ghost"}, {"name": "エナジーボール", "type": "grass"}]
  },
  "カミツオロチ": {
    fast: [{"name": "ドラゴンテール", "type": "dragon"}],
    charged: [{"name": "タネばくだん", "type": "grass"}, {"name": "げきりん", "type": "dragon"}]
  }
};
