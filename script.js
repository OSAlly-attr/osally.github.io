// ポケモンのデータ
const pokemons = {
"No":[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720, 721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840, 841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900, 901, 902, 903, 904, 905], 
"Name":['フシギダネ', 'フシギソウ', 'フシギバナ', 'ヒトカゲ', 'リザード', 'リザードン', 'ゼニガメ', 'カメール', 'カメックス', 'キャタピー', 'トランセル', 'バタフリー', 'ビードル', 'コクーン', 'スピアー', 'ポッポ', 'ピジョン', 'ピジョット', 'コラッタ', 'ラッタ', 'オニスズメ', 'オニドリル', 'アーボ', 'アーボック', 'ピカチュウ', 'ライチュウ', 'サンド', 'サンドパン', 'ニドラン♀', 'ニドリーナ', 'ニドクイン', 'ニドラン♂', 'ニドリーノ', 'ニドキング', 'ピッピ', 'ピクシー', 'ロコン', 'キュウコン', 'プリン', 'プクリン', 'ズバット', 'ゴルバット', 'ナゾノクサ', 'クサイハナ', 'ラフレシア', 'パラス', 'パラセクト', 'コンパン', 'モルフォン', 'ディグダ', 'ダグトリオ', 'ニャース', 'ペルシアン', 'コダック', 'ゴルダック', 'マンキー', 'オコリザル', 'ガーディ', 'ウインディ', 'ニョロモ', 'ニョロゾ', 'ニョロボン', 'ケーシィ', 'ユンゲラー', 'フーディン', 'ワンリキー', 'ゴーリキー', 'カイリキー', 'マダツボミ', 'ウツドン', 'ウツボット', 'メノクラゲ', 'ドククラゲ', 'イシツブテ', 'ゴローン', 'ゴローニャ', 'ポニータ', 'ギャロップ', 'ヤドン', 'ヤドラン', 'コイル', 'レアコイル', 'カモネギ', 'ドードー', 'ドードリオ', 'パウワウ', 'ジュゴン', 'ベトベター', 'ベトベトン', 'シェルダー', 'パルシェン', 'ゴース', 'ゴースト', 'ゲンガー', 'イワーク', 'スリープ', 'スリーパー', 'クラブ', 'キングラー', 'ビリリダマ', 'マルマイン', 'タマタマ', 'ナッシー', 'カラカラ', 'ガラガラ', 'サワムラー', 'エビワラー', 'ベロリンガ', 'ドガース', 'マタドガス', 'サイホーン', 'サイドン', 'ラッキー', 'モンジャラ', 'ガルーラ', 'タッツー', 'シードラ', 'トサキント', 'アズマオウ', 'ヒトデマン', 'スターミー', 'バリヤード', 'ストライク', 'ルージュラ', 'エレブー', 'ブーバー', 'カイロス', 'ケンタロス', 'コイキング', 'ギャラドス', 'ラプラス', 'メタモン', 'イーブイ', 'シャワーズ', 'サンダース', 'ブースター', 'ポリゴン', 'オムナイト', 'オムスター', 'カブト', 'カブトプス', 'プテラ', 'カビゴン', 'フリーザー', 'サンダー', 'ファイヤー', 'ミニリュウ', 'ハクリュー', 'カイリュー', 'ミュウツー', 'ミュウ', 'チコリータ', 'ベイリーフ', 'メガニウム', 'ヒノアラシ', 'マグマラシ', 'バクフーン', 'ワニノコ', 'アリゲイツ', 'オーダイル', 'オタチ', 'オオタチ', 'ホーホー', 'ヨルノズク', 'レディバ', 'レディアン', 'イトマル', 'アリアドス', 'クロバット', 'チョンチー', 'ランターン', 'ピチュー', 'ピィ', 'ププリン', 'トゲピー', 'トゲチック', 'ネイティ', 'ネイティオ', 'メリープ', 'モココ', 'デンリュウ', 'キレイハナ', 'マリル', 'マリルリ', 'ウソッキー', 'ニョロトノ', 'ハネッコ', 'ポポッコ', 'ワタッコ', 'エイパム', 'ヒマナッツ', 'キマワリ', 'ヤンヤンマ', 'ウパー', 'ヌオー', 'エーフィ', 'ブラッキー', 'ヤミカラス', 'ヤドキング', 'ムウマ', 'アンノーン', 'ソーナンス', 'キリンリキ', 'クヌギダマ', 'フォレトス', 'ノコッチ', 'グライガー', 'ハガネール', 'ブルー', 'グランブル', 'ハリーセン', 'ハッサム', 'ツボツボ', 'ヘラクロス', 'ニューラ', 'ヒメグマ', 'リングマ', 'マグマッグ', 'マグカルゴ', 'ウリムー', 'イノムー', 'サニーゴ', 'テッポウオ', 'オクタン', 'デリバード', 'マンタイン', 'エアームド', 'デルビル', 'ヘルガー', 'キングドラ', 'ゴマゾウ', 'ドンファン', 'ポリゴン2', 'オドシシ', 'ドーブル', 'バルキー', 'カポエラー', 'ムチュール', 'エレキッド', 'ブビィ', 'ミルタンク', 'ハピナス', 'ライコウ', 'エンテイ', 'スイクン', 'ヨーギラス', 'サナギラス', 'バンギラス', 'ルギア', 'ホウオウ', 'セレビィ', 'キモリ', 'ジュプトル', 'ジュカイン', 'アチャモ', 'ワカシャモ', 'バシャーモ', 'ミズゴロウ', 'ヌマクロー', 'ラグラージ', 'ポチエナ', 'グラエナ', 'ジグザグマ', 'マッスグマ', 'ケムッソ', 'カラサリス', 'アゲハント', 'マユルド', 'ドクケイル', 'ハスボー', 'ハスブレロ', 'ルンパッパ', 'タネボー', 'コノハナ', 'ダーテング', 'スバメ', 'オオスバメ', 'キャモメ', 'ペリッパー', 'ラルトス', 'キルリア', 'サーナイト', 'アメタマ', 'アメモース', 'キノココ', 'キノガッサ', 'ナマケロ', 'ヤルキモノ', 'ケッキング', 'ツチニン', 'テッカニン', 'ヌケニン', 'ゴニョニョ', 'ドゴーム', 'バクオング', 'マクノシタ', 'ハリテヤマ', 'ルリリ', 'ノズパス', 'エネコ', 'エネコロロ', 'ヤミラミ', 'クチート', 'ココドラ', 'コドラ', 'ボスゴドラ', 'アサナン', 'チャーレム', 'ラクライ', 'ライボルト', 'プラスル', 'マイナン', 'バルビート', 'イルミーゼ', 'ロゼリア', 'ゴクリン', 'マルノーム', 'キバニア', 'サメハダー', 'ホエルコ', 'ホエルオー', 'ドンメル', 'バクーダ', 'コータス', 'バネブー', 'ブーピッグ', 'パッチール', 'ナックラー', 'ビブラーバ', 'フライゴン', 'サボネア', 'ノクタス', 'チルット', 'チルタリス', 'ザングース', 'ハブネーク', 'ルナトーン', 'ソルロック', 'ドジョッチ', 'ナマズン', 'ヘイガニ', 'シザリガー', 'ヤジロン', 'ネンドール', 'リリーラ', 'ユレイドル', 'アノプス', 'アーマルド', 'ヒンバス', 'ミロカロス', 'ポワルン', 'カクレオン', 'カゲボウズ', 'ジュペッタ', 'ヨマワル', 'サマヨール', 'トロピウス', 'チリーン', 'アブソル', 'ソーナノ', 'ユキワラシ', 'オニゴーリ', 'タマザラシ', 'トドグラー', 'トドゼルガ', 'パールル', 'ハンテール', 'サクラビス', 'ジーランス', 'ラブカス', 'タツベイ', 'コモルー', 'ボーマンダ', 'ダンバル', 'メタング', 'メタグロス', 'レジロック', 'レジアイス', 'レジスチル', 'ラティアス', 'ラティオス', 'カイオーガ', 'グラードン', 'レックウザ', 'ジラーチ', 'デオキシス', 'ナエトル', 'ハヤシガメ', 'ドダイトス', 'ヒコザル', 'モウカザル', 'ゴウカザル', 'ポッチャマ', 'ポッタイシ', 'エンペルト', 'ムックル', 'ムクバード', 'ムクホーク', 'ビッパ', 'ビーダル', 'コロボーシ', 'コロトック', 'コリンク', 'ルクシオ', 'レントラー', 'スボミー', 'ロズレイド', 'ズガイドス', 'ラムパルド', 'タテトプス', 'トリデプス', 'ミノムッチ', 'ミノマダム', 'ガーメイル', 'ミツハニー', 'ビークイン', 'パチリス', 'ブイゼル', 'フローゼル', 'チェリンボ', 'チェリム', 'カラナクシ', 'トリトドン', 'エテボース', 'フワンテ', 'フワライド', 'ミミロル', 'ミミロップ', 'ムウマージ', 'ドンカラス', 'ニャルマー', 'ブニャット', 'リーシャン', 'スカンプー', 'スカタンク', 'ドーミラー', 'ドータクン', 'ウソハチ', 'マネネ', 'ピンプク', 'ペラップ', 'ミカルゲ', 'フカマル', 'ガバイト', 'ガブリアス', 'ゴンベ', 'リオル', 'ルカリオ', 'ヒポポタス', 'カバルドン', 'スコルピ', 'ドラピオン', 'グレッグル', 'ドクロッグ', 'マスキッパ', 'ケイコウオ', 'ネオラント', 'タマンタ', 'ユキカブリ', 'ユキノオー', 'マニューラ', 'ジバコイル', 'ベロベルト', 'ドサイドン', 'モジャンボ', 'エレキブル', 'ブーバーン', 'トゲキッス', 'メガヤンマ', 'リーフィア', 'グレイシア', 'グライオン', 'マンムー', 'ポリゴンZ', 'エルレイド', 'ダイノーズ', 'ヨノワール', 'ユキメノコ', 'ロトム', 'ユクシー', 'エムリット', 'アグノム', 'ディアルガ', 'パルキア', 'ヒードラン', 'レジギガス', 'ギラティナ', 'クレセリア', 'フィオネ', 'マナフィ', 'ダークライ', 'シェイミ', 'アルセウス', 'ビクティニ', 'ツタージャ', 'ジャノビー', 'ジャローダ', 'ポカブ', 'チャオブー', 'エンブオー', 'ミジュマル', 'フタチマル', 'ダイケンキ', 'ミネズミ', 'ミルホッグ', 'ヨーテリー', 'ハーデリア', 'ムーランド', 'チョロネコ', 'レパルダス', 'ヤナップ', 'ヤナッキー', 'バオップ', 'バオッキー', 'ヒヤップ', 'ヒヤッキー', 'ムンナ', 'ムシャーナ', 'マメパト', 'ハトーボー', 'ケンホロウ', 'シママ', 'ゼブライカ', 'ダンゴロ', 'ガントル', 'ギガイアス', 'コロモリ', 'ココロモリ', 'モグリュー', 'ドリュウズ', 'タブンネ', 'ドッコラー', 'ドテッコツ', 'ローブシン', 'オタマロ', 'ガマガル', 'ガマゲロゲ', 'ナゲキ', 'ダゲキ', 'クルミル', 'クルマユ', 'ハハコモリ', 'フシデ', 'ホイーガ', 'ペンドラー', 'モンメン', 'エルフーン', 'チュリネ', 'ドレディア', 'バスラオ', 'メグロコ', 'ワルビル', 'ワルビアル', 'ダルマッカ', 'ヒヒダルマ', 'マラカッチ', 'イシズマイ', 'イワパレス', 'ズルッグ', 'ズルズキン', 'シンボラー', 'デスマス', 'デスカーン', 'プロトーガ', 'アバゴーラ', 'アーケン', 'アーケオス', 'ヤブクロン', 'ダストダス', 'ゾロア', 'ゾロアーク', 'チラーミィ', 'チラチーノ', 'ゴチム', 'ゴチミル', 'ゴチルゼル', 'ユニラン', 'ダブラン', 'ランクルス', 'コアルヒー', 'スワンナ', 'バニプッチ', 'バニリッチ', 'バイバニラ', 'シキジカ', 'メブキジカ', 'エモンガ', 'カブルモ', 'シュバルゴ', 'タマゲタケ', 'モロバレル', 'プルリル', 'ブルンゲル', 'ママンボウ', 'バチュル', 'デンチュラ', 'テッシード', 'ナットレイ', 'ギアル', 'ギギアル', 'ギギギアル', 'シビシラス', 'シビビール', 'シビルドン', 'リグレー', 'オーベム', 'ヒトモシ', 'ランプラー', 'シャンデラ', 'キバゴ', 'オノンド', 'オノノクス', 'クマシュン', 'ツンベアー', 'フリージオ', 'チョボマキ', 'アギルダー', 'マッギョ', 'コジョフー', 'コジョンド', 'クリムガン', 'ゴビット', 'ゴルーグ', 'コマタナ', 'キリキザン', 'バッフロン', 'ワシボン', 'ウォーグル', 'バルチャイ', 'バルジーナ', 'クイタラン', 'アイアント', 'モノズ', 'ジヘッド', 'サザンドラ', 'メラルバ', 'ウルガモス', 'コバルオン', 'テラキオン', 'ビリジオン', 'トルネロス', 'ボルトロス', 'レシラム', 'ゼクロム', 'ランドロス', 'キュレム', 'ケルディオ', 'メロエッタ', 'ゲノセクト', 'ハリマロン', 'ハリボーグ', 'ブリガロン', 'フォッコ', 'テールナー', 'マフォクシー', 'ケロマツ', 'ゲコガシラ', 'ゲッコウガ', 'ホルビー', 'ホルード', 'ヤヤコマ', 'ヒノヤコマ', 'ファイアロー', 'コフキムシ', 'コフーライ', 'ビビヨン', 'シシコ', 'カエンジシ', 'フラベベ', 'フラエッテ', 'フラージェス', 'メェークル', 'ゴーゴート', 'ヤンチャム', 'ゴロンダ', 'トリミアン', 'ニャスパー', 'ニャオニクス', 'ヒトツキ', 'ニダンギル', 'ギルガルド', 'シュシュプ', 'フレフワン', 'ペロッパフ', 'ペロリーム', 'マーイーカ', 'カラマネロ', 'カメテテ', 'ガメノデス', 'クズモー', 'ドラミドロ', 'ウデッポウ', 'ブロスター', 'エリキテル', 'エレザード', 'チゴラス', 'ガチゴラス', 'アマルス', 'アマルルガ', 'ニンフィア', 'ルチャブル', 'デデンネ', 'メレシー', 'ヌメラ', 'ヌメイル', 'ヌメルゴン', 'クレッフィ', 'ボクレー', 'オーロット', 'バケッチャ', 'パンプジン', 'カチコール', 'クレベース', 'オンバット', 'オンバーン', 'ゼルネアス', 'イベルタル', 'ジガルデ', 'ディアンシー', 'フーパ', 'ボルケニオン', 'モクロー', 'フクスロー', 'ジュナイパー', 'ニャビー', 'ニャヒート', 'ガオガエン', 'アシマリ', 'オシャマリ', 'アシレーヌ', 'ツツケラ', 'ケララッパ', 'ドデカバシ', 'ヤングース', 'デカグース', 'アゴジムシ', 'デンヂムシ', 'クワガノン', 'マケンカニ', 'ケケンカニ', 'オドリドリ', 'アブリー', 'アブリボン', 'イワンコ', 'ルガルガン', 'ヨワシ', 'ヒドイデ', 'ドヒドイデ', 'ドロバンコ', 'バンバドロ', 'シズクモ', 'オニシズクモ', 'カリキリ', 'ラランテス', 'ネマシュ', 'マシェード', 'ヤトウモリ', 'エンニュート', 'ヌイコグマ', 'キテルグマ', 'アマカジ', 'アママイコ', 'アマージョ', 'キュワワー', 'ヤレユータン', 'ナゲツケサル', 'コソクムシ', 'グソクムシャ', 'スナバァ', 'シロデスナ', 'ナマコブシ', 'タイプ:ヌル', 'シルヴァディ', 'メテノ', 'ネッコアラ', 'バクガメス', 'トゲデマル', 'ミミッキュ', 'ハギギシリ', 'ジジーロン', 'ダダリン', 'ジャラコ', 'ジャランゴ', 'ジャラランガ', 'カプ・コケコ', 'カプ・テテフ', 'カプ・ブルル', 'カプ・レヒレ', 'コスモッグ', 'コスモウム', 'ソルガレオ', 'ルナアーラ', 'ウツロイド', 'マッシブーン', 'フェローチェ', 'デンジュモク', 'テッカグヤ', 'カミツルギ', 'アクジキング', 'ネクロズマ', 'マギアナ', 'マーシャドー', 'ベベノム', 'アーゴヨン', 'ツンデツンデ', 'ズガドーン', 'ゼラオラ', 'メルタン', 'メルメタル', 'サルノリ', 'バチンキー', 'ゴリランダー', 'ヒバニー', 'ラビフット', 'エースバーン', 'メッソン', 'ジメレオン', 'インテレオン', 'ホシガリス', 'ヨクバリス', 'ココガラ', 'アオガラス', 'アーマーガア', 'サッチムシ', 'レドームシ', 'イオルブ', 'クスネ', 'フォクスライ', 'ヒメンカ', 'ワタシラガ', 'ウールー', 'バイウールー', 'カムカメ', 'カジリガメ', 'ワンパチ', 'パルスワン', 'タンドン', 'トロッゴン', 'セキタンザン', 'カジッチュ', 'アップリュー', 'タルップル', 'スナヘビ', 'サダイジャ', 'ウッウ', 'サシカマス', 'カマスジョー', 'エレズン', 'ストリンダー', 'ヤクデ', 'マルヤクデ', 'タタッコ', 'オトスパス', 'ヤバチャ', 'ポットデス', 'ミブリム', 'テブリム', 'ブリムオン', 'ベロバー', 'ギモー', 'オーロンゲ', 'タチフサグマ', 'ニャイキング', 'サニゴーン', 'ネギガナイト', 'バリコオル', 'デスバーン', 'マホミル', 'マホイップ', 'タイレーツ', 'バチンウニ', 'ユキハミ', 'モスノウ', 'イシヘンジン', 'コオリッポ', 'イエッサン', 'モルペコ', 'ゾウドウ', 'ダイオウドウ', 'パッチラゴン', 'パッチルドン', 'ウオノラゴン', 'ウオチルドン', 'ジュラルドン', 'ドラメシヤ', 'ドロンチ', 'ドラパルト', 'ザシアン', 'ザマゼンタ', 'ムゲンダイナ', 'ダクマ', 'ウーラオス', 'ザルード', 'レジエレキ', 'レジドラゴ', 'ブリザポス', 'レイスポス', 'バドレックス', 'アヤシシ', 'バサギリ', 'ガチグマ', 'イダイトウ', 'オオニューラ', 'ハリーマン', 'ラブトロス'], 
"type1":['くさ', 'くさ', 'くさ', 'ほのお', 'ほのお', 'ほのお', 'みず', 'みず', 'みず', 'むし', 'むし', 'むし', 'むし', 'むし', 'むし', 'ノーマル', 'ノーマル', 'ノーマル', 'ノーマル', 'ノーマル', 'ノーマル', 'ノーマル', 'どく', 'どく', 'でんき', 'でんき', 'じめん', 'じめん', 'どく', 'どく', 'どく', 'どく', 'どく', 'どく', 'フェアリー', 'フェアリー', 'ほのお', 'ほのお', 'ノーマル', 'ノーマル', 'どく', 'どく', 'くさ', 'くさ', 'くさ', 'むし', 'むし', 'むし', 'むし', 'じめん', 'じめん', 'ノーマル', 'ノーマル', 'みず', 'みず', 'かくとう', 'かくとう', 'ほのお', 'ほのお', 'みず', 'みず', 'みず', 'エスパー', 'エスパー', 'エスパー', 'かくとう', 'かくとう', 'かくとう', 'くさ', 'くさ', 'くさ', 'みず', 'みず', 'いわ', 'いわ', 'いわ', 'ほのお', 'ほのお', 'みず', 'みず', 'でんき', 'でんき', 'ノーマル', 'ノーマル', 'ノーマル', 'みず', 'みず', 'どく', 'どく', 'みず', 'みず', 'ゴースト', 'ゴースト', 'ゴースト', 'いわ', 'エスパー', 'エスパー', 'みず', 'みず', 'でんき', 'でんき', 'くさ', 'くさ', 'じめん', 'じめん', 'かくとう', 'かくとう', 'ノーマル', 'どく', 'どく', 'じめん', 'じめん', 'ノーマル', 'くさ', 'ノーマル', 'みず', 'みず', 'みず', 'みず', 'みず', 'みず', 'エスパー', 'むし', 'こおり', 'でんき', 'ほのお', 'むし', 'ノーマル', 'みず', 'みず', 'みず', 'ノーマル', 'ノーマル', 'みず', 'でんき', 'ほのお', 'ノーマル', 'いわ', 'いわ', 'いわ', 'いわ', 'いわ', 'ノーマル', 'こおり', 'でんき', 'ほのお', 'ドラゴン', 'ドラゴン', 'ドラゴン', 'エスパー', 'エスパー', 'くさ', 'くさ', 'くさ', 'ほのお', 'ほのお', 'ほのお', 'みず', 'みず', 'みず', 'ノーマル', 'ノーマル', 'ノーマル', 'ノーマル', 'むし', 'むし', 'むし', 'むし', 'どく', 'みず', 'みず', 'でんき', 'フェアリー', 'ノーマル', 'フェアリー', 'フェアリー', 'エスパー', 'エスパー', 'でんき', 'でんき', 'でんき', 'くさ', 'みず', 'みず', 'いわ', 'みず', 'くさ', 'くさ', 'くさ', 'ノーマル', 'くさ', 'くさ', 'むし', 'みず', 'みず', 'エスパー', 'あく', 'あく', 'みず', 'ゴースト', 'エスパー', 'エスパー', 'ノーマル', 'むし', 'むし', 'ノーマル', 'じめん', 'はがね', 'フェアリー', 'フェアリー', 'みず', 'むし', 'むし', 'むし', 'あく', 'ノーマル', 'ノーマル', 'ほのお', 'ほのお', 'こおり', 'こおり', 'みず', 'みず', 'みず', 'こおり', 'みず', 'はがね', 'あく', 'あく', 'みず', 'じめん', 'じめん', 'ノーマル', 'ノーマル', 'ノーマル', 'かくとう', 'かくとう', 'こおり', 'でんき', 'ほのお', 'ノーマル', 'ノーマル', 'でんき', 'ほのお', 'みず', 'いわ', 'いわ', 'いわ', 'エスパー', 'ほのお', 'エスパー', 'くさ', 'くさ', 'くさ', 'ほのお', 'ほのお', 'ほのお', 'みず', 'みず', 'みず', 'あく', 'あく', 'ノーマル', 'ノーマル', 'むし', 'むし', 'むし', 'むし', 'むし', 'みず', 'みず', 'みず', 'くさ', 'くさ', 'くさ', 'ノーマル', 'ノーマル', 'みず', 'みず', 'エスパー', 'エスパー', 'エスパー', 'むし', 'むし', 'くさ', 'くさ', 'ノーマル', 'ノーマル', 'ノーマル', 'むし', 'むし', 'むし', 'ノーマル', 'ノーマル', 'ノーマル', 'かくとう', 'かくとう', 'ノーマル', 'いわ', 'ノーマル', 'ノーマル', 'あく', 'はがね', 'はがね', 'はがね', 'はがね', 'かくとう', 'かくとう', 'でんき', 'でんき', 'でんき', 'でんき', 'むし', 'むし', 'くさ', 'どく', 'どく', 'みず', 'みず', 'みず', 'みず', 'ほのお', 'ほのお', 'ほのお', 'エスパー', 'エスパー', 'ノーマル', 'じめん', 'じめん', 'じめん', 'くさ', 'くさ', 'ノーマル', 'ドラゴン', 'ノーマル', 'どく', 'いわ', 'いわ', 'みず', 'みず', 'みず', 'みず', 'じめん', 'じめん', 'いわ', 'いわ', 'いわ', 'いわ', 'みず', 'みず', 'ノーマル', 'ノーマル', 'ゴースト', 'ゴースト', 'ゴースト', 'ゴースト', 'くさ', 'エスパー', 'あく', 'エスパー', 'こおり', 'こおり', 'こおり', 'こおり', 'こおり', 'みず', 'みず', 'みず', 'みず', 'みず', 'ドラゴン', 'ドラゴン', 'ドラゴン', 'はがね', 'はがね', 'はがね', 'いわ', 'こおり', 'はがね', 'ドラゴン', 'ドラゴン', 'みず', 'じめん', 'ドラゴン', 'はがね', 'エスパー', 'くさ', 'くさ', 'くさ', 'ほのお', 'ほのお', 'ほのお', 'みず', 'みず', 'みず', 'ノーマル', 'ノーマル', 'ノーマル', 'ノーマル', 'ノーマル', 'むし', 'むし', 'でんき', 'でんき', 'でんき', 'くさ', 'くさ', 'いわ', 'いわ', 'いわ', 'いわ', 'むし', 'むし', 'むし', 'むし', 'むし', 'でんき', 'みず', 'みず', 'くさ', 'くさ', 'みず', 'みず', 'ノーマル', 'ゴースト', 'ゴースト', 'ノーマル', 'ノーマル', 'ゴースト', 'あく', 'ノーマル', 'ノーマル', 'エスパー', 'どく', 'どく', 'はがね', 'はがね', 'いわ', 'エスパー', 'ノーマル', 'ノーマル', 'ゴースト', 'ドラゴン', 'ドラゴン', 'ドラゴン', 'ノーマル', 'かくとう', 'かくとう', 'じめん', 'じめん', 'どく', 'どく', 'どく', 'どく', 'くさ', 'みず', 'みず', 'みず', 'くさ', 'くさ', 'あく', 'でんき', 'ノーマル', 'じめん', 'くさ', 'でんき', 'ほのお', 'フェアリー', 'むし', 'くさ', 'こおり', 'じめん', 'こおり', 'ノーマル', 'エスパー', 'いわ', 'ゴースト', 'こおり', 'でんき', 'エスパー', 'エスパー', 'エスパー', 'はがね', 'みず', 'ほのお', 'ノーマル', 'ゴースト', 'エスパー', 'みず', 'みず', 'あく', 'くさ', 'ノーマル', 'エスパー', 'くさ', 'くさ', 'くさ', 'ほのお', 'ほのお', 'ほのお', 'みず', 'みず', 'みず', 'ノーマル', 'ノーマル', 'ノーマル', 'ノーマル', 'ノーマル', 'あく', 'あく', 'くさ', 'くさ', 'ほのお', 'ほのお', 'みず', 'みず', 'エスパー', 'エスパー', 'ノーマル', 'ノーマル', 'ノーマル', 'でんき', 'でんき', 'いわ', 'いわ', 'いわ', 'エスパー', 'エスパー', 'じめん', 'じめん', 'ノーマル', 'かくとう', 'かくとう', 'かくとう', 'みず', 'みず', 'みず', 'かくとう', 'かくとう', 'むし', 'むし', 'むし', 'むし', 'むし', 'むし', 'くさ', 'くさ', 'くさ', 'くさ', 'みず', 'じめん', 'じめん', 'じめん', 'ほのお', 'ほのお', 'くさ', 'むし', 'むし', 'あく', 'あく', 'エスパー', 'ゴースト', 'ゴースト', 'みず', 'みず', 'いわ', 'いわ', 'どく', 'どく', 'あく', 'あく', 'ノーマル', 'ノーマル', 'エスパー', 'エスパー', 'エスパー', 'エスパー', 'エスパー', 'エスパー', 'みず', 'みず', 'こおり', 'こおり', 'こおり', 'ノーマル', 'ノーマル', 'でんき', 'むし', 'むし', 'くさ', 'くさ', 'みず', 'みず', 'みず', 'むし', 'むし', 'くさ', 'くさ', 'はがね', 'はがね', 'はがね', 'でんき', 'でんき', 'でんき', 'エスパー', 'エスパー', 'ゴースト', 'ゴースト', 'ゴースト', 'ドラゴン', 'ドラゴン', 'ドラゴン', 'こおり', 'こおり', 'こおり', 'むし', 'むし', 'でんき', 'かくとう', 'かくとう', 'ドラゴン', 'じめん', 'じめん', 'あく', 'あく', 'ノーマル', 'ノーマル', 'ノーマル', 'あく', 'あく', 'ほのお', 'むし', 'あく', 'あく', 'あく', 'むし', 'むし', 'はがね', 'いわ', 'くさ', 'ひこう', 'でんき', 'ドラゴン', 'ドラゴン', 'じめん', 'ドラゴン', 'みず', 'ノーマル', 'むし', 'くさ', 'くさ', 'くさ', 'ほのお', 'ほのお', 'ほのお', 'みず', 'みず', 'みず', 'ノーマル', 'ノーマル', 'ノーマル', 'ほのお', 'ほのお', 'むし', 'むし', 'むし', 'ほのお', 'ほのお', 'フェアリー', 'フェアリー', 'フェアリー', 'くさ', 'くさ', 'かくとう', 'かくとう', 'ノーマル', 'エスパー', 'エスパー', 'はがね', 'はがね', 'はがね', 'フェアリー', 'フェアリー', 'フェアリー', 'フェアリー', 'あく', 'あく', 'いわ', 'いわ', 'どく', 'どく', 'みず', 'みず', 'でんき', 'でんき', 'いわ', 'いわ', 'いわ', 'いわ', 'フェアリー', 'かくとう', 'でんき', 'いわ', 'ドラゴン', 'ドラゴン', 'ドラゴン', 'はがね', 'ゴースト', 'ゴースト', 'ゴースト', 'ゴースト', 'こおり', 'こおり', 'ひこう', 'ひこう', 'フェアリー', 'あく', 'ドラゴン', 'いわ', 'エスパー', 'ほのお', 'くさ', 'くさ', 'くさ', 'ほのお', 'ほのお', 'ほのお', 'みず', 'みず', 'みず', 'ノーマル', 'ノーマル', 'ノーマル', 'ノーマル', 'ノーマル', 'むし', 'むし', 'むし', 'かくとう', 'かくとう', 'ほのお', 'むし', 'むし', 'いわ', 'いわ', 'みず', 'どく', 'どく', 'じめん', 'じめん', 'みず', 'みず', 'くさ', 'くさ', 'くさ', 'くさ', 'どく', 'どく', 'ノーマル', 'ノーマル', 'くさ', 'くさ', 'くさ', 'フェアリー', 'ノーマル', 'かくとう', 'むし', 'むし', 'ゴースト', 'ゴースト', 'みず', 'ノーマル', 'ノーマル', 'いわ', 'ノーマル', 'ほのお', 'でんき', 'ゴースト', 'みず', 'ノーマル', 'ゴースト', 'ドラゴン', 'ドラゴン', 'ドラゴン', 'でんき', 'エスパー', 'くさ', 'みず', 'エスパー', 'エスパー', 'エスパー', 'エスパー', 'いわ', 'むし', 'むし', 'でんき', 'はがね', 'くさ', 'あく', 'エスパー', 'はがね', 'かくとう', 'どく', 'どく', 'いわ', 'ほのお', 'でんき', 'はがね', 'はがね', 'くさ', 'くさ', 'くさ', 'ほのお', 'ほのお', 'ほのお', 'みず', 'みず', 'みず', 'ノーマル', 'ノーマル', 'ひこう', 'ひこう', 'ひこう', 'むし', 'むし', 'むし', 'あく', 'あく', 'くさ', 'くさ', 'ノーマル', 'ノーマル', 'みず', 'みず', 'でんき', 'でんき', 'いわ', 'いわ', 'いわ', 'くさ', 'くさ', 'くさ', 'じめん', 'じめん', 'ひこう', 'みず', 'みず', 'でんき', 'でんき', 'ほのお', 'ほのお', 'かくとう', 'かくとう', 'ゴースト', 'ゴースト', 'エスパー', 'エスパー', 'エスパー', 'あく', 'あく', 'あく', 'あく', 'はがね', 'ゴースト', 'かくとう', 'こおり', 'じめん', 'フェアリー', 'フェアリー', 'かくとう', 'でんき', 'こおり', 'こおり', 'いわ', 'こおり', 'エスパー', 'でんき', 'はがね', 'はがね', 'でんき', 'でんき', 'みず', 'みず', 'はがね', 'ドラゴン', 'ドラゴン', 'ドラゴン', 'フェアリー', 'かくとう', 'どく', 'かくとう', 'かくとう', 'あく', 'でんき', 'ドラゴン', 'こおり', 'ゴースト', 'エスパー', 'ノーマル', 'むし', 'じめん', 'みず', 'かくとう', 'あく', 'フェアリー'], 
"type2":['どく', 'どく', 'どく', 'なし', 'なし', 'ひこう', 'なし', 'なし', 'なし', 'なし', 'なし', 'ひこう', 'どく', 'どく', 'どく', 'ひこう', 'ひこう', 'ひこう', 'なし', 'なし', 'ひこう', 'ひこう', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'じめん', 'なし', 'なし', 'じめん', 'なし', 'なし', 'なし', 'なし', 'フェアリー', 'フェアリー', 'ひこう', 'ひこう', 'どく', 'どく', 'どく', 'くさ', 'くさ', 'どく', 'どく', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'かくとう', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'どく', 'どく', 'どく', 'どく', 'どく', 'じめん', 'じめん', 'じめん', 'なし', 'なし', 'エスパー', 'エスパー', 'はがね', 'はがね', 'ひこう', 'ひこう', 'ひこう', 'なし', 'こおり', 'なし', 'なし', 'なし', 'こおり', 'どく', 'どく', 'どく', 'じめん', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'エスパー', 'エスパー', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'いわ', 'いわ', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'エスパー', 'フェアリー', 'ひこう', 'エスパー', 'なし', 'なし', 'なし', 'なし', 'なし', 'ひこう', 'こおり', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'みず', 'みず', 'みず', 'みず', 'ひこう', 'なし', 'ひこう', 'ひこう', 'ひこう', 'なし', 'なし', 'ひこう', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'ひこう', 'ひこう', 'ひこう', 'ひこう', 'どく', 'どく', 'ひこう', 'でんき', 'でんき', 'なし', 'なし', 'フェアリー', 'なし', 'ひこう', 'ひこう', 'ひこう', 'なし', 'なし', 'なし', 'なし', 'フェアリー', 'フェアリー', 'なし', 'なし', 'ひこう', 'ひこう', 'ひこう', 'なし', 'なし', 'なし', 'ひこう', 'じめん', 'じめん', 'なし', 'なし', 'ひこう', 'エスパー', 'なし', 'なし', 'なし', 'エスパー', 'なし', 'はがね', 'なし', 'ひこう', 'じめん', 'なし', 'なし', 'どく', 'はがね', 'いわ', 'かくとう', 'こおり', 'なし', 'なし', 'なし', 'いわ', 'じめん', 'じめん', 'いわ', 'なし', 'なし', 'ひこう', 'ひこう', 'ひこう', 'ほのお', 'ほのお', 'ドラゴン', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'エスパー', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'じめん', 'じめん', 'あく', 'ひこう', 'ひこう', 'くさ', 'なし', 'なし', 'なし', 'なし', 'かくとう', 'かくとう', 'なし', 'じめん', 'じめん', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'ひこう', 'なし', 'どく', 'くさ', 'くさ', 'くさ', 'なし', 'あく', 'あく', 'ひこう', 'ひこう', 'ひこう', 'ひこう', 'フェアリー', 'フェアリー', 'フェアリー', 'みず', 'ひこう', 'なし', 'かくとう', 'なし', 'なし', 'なし', 'じめん', 'ひこう', 'ゴースト', 'なし', 'なし', 'なし', 'なし', 'なし', 'フェアリー', 'なし', 'なし', 'なし', 'ゴースト', 'フェアリー', 'いわ', 'いわ', 'いわ', 'エスパー', 'エスパー', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'どく', 'なし', 'なし', 'あく', 'あく', 'なし', 'なし', 'じめん', 'じめん', 'なし', 'なし', 'なし', 'なし', 'なし', 'ドラゴン', 'ドラゴン', 'なし', 'あく', 'ひこう', 'ひこう', 'なし', 'なし', 'エスパー', 'エスパー', 'じめん', 'じめん', 'なし', 'あく', 'エスパー', 'エスパー', 'くさ', 'くさ', 'むし', 'むし', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'ひこう', 'なし', 'なし', 'なし', 'なし', 'なし', 'みず', 'みず', 'みず', 'なし', 'なし', 'なし', 'いわ', 'なし', 'なし', 'なし', 'ひこう', 'エスパー', 'エスパー', 'エスパー', 'なし', 'なし', 'なし', 'エスパー', 'エスパー', 'なし', 'なし', 'ひこう', 'エスパー', 'なし', 'なし', 'なし', 'じめん', 'なし', 'かくとう', 'かくとう', 'なし', 'なし', 'はがね', 'ひこう', 'ひこう', 'ひこう', 'なし', 'みず', 'なし', 'なし', 'なし', 'なし', 'なし', 'どく', 'どく', 'なし', 'なし', 'はがね', 'はがね', 'なし', 'くさ', 'ひこう', 'ひこう', 'ひこう', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'じめん', 'なし', 'ひこう', 'ひこう', 'なし', 'なし', 'なし', 'ひこう', 'なし', 'なし', 'なし', 'あく', 'あく', 'エスパー', 'エスパー', 'なし', 'フェアリー', 'なし', 'ひこう', 'あく', 'じめん', 'じめん', 'じめん', 'なし', 'なし', 'はがね', 'なし', 'なし', 'むし', 'あく', 'かくとう', 'かくとう', 'なし', 'なし', 'なし', 'ひこう', 'こおり', 'こおり', 'こおり', 'はがね', 'なし', 'いわ', 'なし', 'なし', 'なし', 'ひこう', 'ひこう', 'なし', 'なし', 'ひこう', 'じめん', 'なし', 'かくとう', 'はがね', 'なし', 'ゴースト', 'ゴースト', 'なし', 'なし', 'なし', 'ドラゴン', 'ドラゴン', 'はがね', 'なし', 'ドラゴン', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'ほのお', 'なし', 'なし', 'なし', 'なし', 'かくとう', 'かくとう', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'ひこう', 'ひこう', 'ひこう', 'なし', 'なし', 'なし', 'なし', 'なし', 'ひこう', 'ひこう', 'なし', 'はがね', 'なし', 'なし', 'なし', 'なし', 'なし', 'じめん', 'じめん', 'なし', 'なし', 'くさ', 'くさ', 'くさ', 'どく', 'どく', 'どく', 'フェアリー', 'フェアリー', 'なし', 'なし', 'なし', 'あく', 'あく', 'あく', 'なし', 'なし', 'なし', 'いわ', 'いわ', 'かくとう', 'かくとう', 'ひこう', 'なし', 'なし', 'いわ', 'いわ', 'ひこう', 'ひこう', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'ひこう', 'ひこう', 'なし', 'なし', 'なし', 'くさ', 'くさ', 'ひこう', 'なし', 'はがね', 'どく', 'どく', 'ゴースト', 'ゴースト', 'なし', 'でんき', 'でんき', 'はがね', 'はがね', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'ほのお', 'ほのお', 'ほのお', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'じめん', 'なし', 'なし', 'なし', 'ゴースト', 'ゴースト', 'はがね', 'はがね', 'なし', 'ひこう', 'ひこう', 'ひこう', 'ひこう', 'なし', 'はがね', 'ドラゴン', 'ドラゴン', 'ドラゴン', 'ほのお', 'ほのお', 'かくとう', 'かくとう', 'かくとう', 'なし', 'ひこう', 'ほのお', 'でんき', 'ひこう', 'こおり', 'かくとう', 'エスパー', 'はがね', 'なし', 'なし', 'かくとう', 'なし', 'なし', 'エスパー', 'なし', 'なし', 'あく', 'なし', 'じめん', 'ひこう', 'ひこう', 'ひこう', 'なし', 'なし', 'ひこう', 'ノーマル', 'ノーマル', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'あく', 'なし', 'なし', 'なし', 'ゴースト', 'ゴースト', 'ゴースト', 'なし', 'なし', 'なし', 'なし', 'エスパー', 'エスパー', 'みず', 'みず', 'みず', 'ドラゴン', 'なし', 'なし', 'ノーマル', 'ノーマル', 'ドラゴン', 'ドラゴン', 'こおり', 'こおり', 'なし', 'ひこう', 'フェアリー', 'フェアリー', 'なし', 'なし', 'なし', 'フェアリー', 'くさ', 'くさ', 'くさ', 'くさ', 'なし', 'なし', 'ドラゴン', 'ドラゴン', 'なし', 'ひこう', 'じめん', 'フェアリー', 'ゴースト', 'みず', 'ひこう', 'ひこう', 'ゴースト', 'なし', 'なし', 'あく', 'なし', 'なし', 'フェアリー', 'ひこう', 'ひこう', 'ひこう', 'なし', 'なし', 'なし', 'でんき', 'でんき', 'なし', 'こおり', 'ひこう', 'フェアリー', 'フェアリー', 'なし', 'なし', 'なし', 'みず', 'みず', 'なし', 'なし', 'むし', 'むし', 'なし', 'なし', 'フェアリー', 'フェアリー', 'ほのお', 'ほのお', 'かくとう', 'かくとう', 'なし', 'なし', 'なし', 'なし', 'エスパー', 'なし', 'みず', 'みず', 'じめん', 'じめん', 'なし', 'なし', 'なし', 'ひこう', 'なし', 'ドラゴン', 'はがね', 'フェアリー', 'エスパー', 'ドラゴン', 'くさ', 'なし', 'かくとう', 'かくとう', 'フェアリー', 'フェアリー', 'フェアリー', 'フェアリー', 'なし', 'なし', 'はがね', 'ゴースト', 'どく', 'かくとう', 'かくとう', 'なし', 'ひこう', 'はがね', 'ドラゴン', 'なし', 'フェアリー', 'ゴースト', 'なし', 'ドラゴン', 'はがね', 'ゴースト', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'はがね', 'なし', 'エスパー', 'エスパー', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'いわ', 'なし', 'なし', 'なし', 'ほのお', 'ほのお', 'ドラゴン', 'ドラゴン', 'ドラゴン', 'なし', 'なし', 'みず', 'なし', 'なし', 'どく', 'どく', 'むし', 'むし', 'なし', 'なし', 'なし', 'なし', 'なし', 'なし', 'フェアリー', 'フェアリー', 'フェアリー', 'フェアリー', 'ノーマル', 'なし', 'なし', 'なし', 'エスパー', 'ゴースト', 'なし', 'なし', 'なし', 'なし', 'むし', 'むし', 'なし', 'なし', 'ノーマル', 'あく', 'なし', 'なし', 'ドラゴン', 'こおり', 'ドラゴン', 'こおり', 'ドラゴン', 'ゴースト', 'ゴースト', 'ゴースト', 'なし', 'なし', 'ドラゴン', 'なし', 'あく', 'くさ', 'なし', 'なし', 'なし', 'なし', 'くさ', 'エスパー', 'いわ', 'ノーマル', 'ゴースト', 'どく', 'どく', 'ひこう']
};

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function hiraToKana(str) {
    return str.replace(/[\u3041-\u3096]/g, function(match) {
        var chr = match.charCodeAt(0) + 0x60;
        return String.fromCharCode(chr);
    });
}

$(function(){
    $('.restart form').hide();
    var correct_cnt = 0;
    var index = getRandomInt(649) + 1;
    $('.randPkmnName p').text((correct_cnt+1) + "問目 :  「" + index + "」");
    $('.hint .prev').text("前の番号のポケモン");
    $('.hint .next').text("後の番号のポケモン");

    $('.inputName .btn-submit').click(function(){
        var name = hiraToKana($('.name').val());
        if (name == ""){
            $('.error').text("エラー : 入力されていません。");
            return false;
        }else if (pokemons["Name"].indexOf(name) == -1){
            $('.error').text("エラー : 「" + name + "」は存在しないポケモンです。");
            return false;
        }
        $('.error').text("");
        if (pokemons["Name"].indexOf(name) == index-1){
            $('.result1').text(index + "番「" + name + "」正解!!");
            index = getRandomInt(649) + 1;
            correct_cnt++;
            $('.randPkmnName p').text((correct_cnt+1) + "問目 :  「" + index + "」");     
            $('.hint .prev').text("前の番号のポケモン");
            $('.hint .next').text("後の番号のポケモン");
        }else{
            $('.result1').text("不正解! " + index + "番は「" + pokemons["Name"][index-1] + "」でした。\n" + name +"は「" + (pokemons["Name"].indexOf(name)+1) + "」番です。");
            $('.result2').text(correct_cnt + "問連続正解!");
            $('.inputName').hide();
            $('.randPkmnName p').hide();
            $('.hint').hide();
            $('.restart form').show();
        }
        return false;
    });

    $('.hint .prev').click(function(){
        $(this).text(pokemons["Name"][index-2]);
        return false;
    });
    $('.hint .next').click(function(){
        $(this).text(pokemons["Name"][index]);
        return false;
    });

    $('.restart .btn-submit').click(function(){
        correct_cnt = 0;
        index = getRandomInt(649) + 1;
        $('.restart form').hide();
        $('.inputName').show();
        $('.randPkmnName p').show();
        $('.result1').hide();
        $('.result2').hide();
        $('.result1').text("");
        $('.result2').test("");
        $('.result1').show();
        $('.result2').show();
        $('.hint').show();
        return false;
    });
});
