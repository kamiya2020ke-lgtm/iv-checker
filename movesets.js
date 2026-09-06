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
  }
};
