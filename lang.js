// Polygol Ailuator Language Dictionary
window.bcpMap = { EN: 'en-US', JP: 'ja-JP', KO: 'ko-KR', ZH: 'zh-CN' };
var bcpMap = window.bcpMap;

function getAppLanguage() {
    let l = (localStorage.getItem('language') || localStorage.getItem('selectedLanguage') || 'EN').toUpperCase();
    if (l === 'JA') l = 'JP';
    return ['EN', 'JP', 'KO', 'ZH'].includes(l) ? l : 'EN';
}
window.getAppLanguage = getAppLanguage;
var getAppLanguage = window.getAppLanguage;

function t(key, params = {}) {
    const lang = getAppLanguage();
    const dict = window['LANG_' + lang + '_AILUATOR'] || window['LANG_EN_AILUATOR'] || {};
    let str = dict[key] !== undefined ? dict[key] : key;
    if (params) {
        Object.keys(params).forEach(p => {
            str = str.replace(new RegExp('\\{' + p + '\\}', 'g'), params[p]);
        });
    }
    return str;
}
window.t = t;
var t = window.t;

window.LANG_EN_AILUATOR = {
    TITLE: "Ailuator",
    ERROR: "Error"
};

window.LANG_JP_AILUATOR = {
    TITLE: "計算機",
    ERROR: "エラー"
};

window.LANG_KO_AILUATOR = {
    TITLE: "계산기",
    ERROR: "오류"
};

window.LANG_ZH_AILUATOR = {
    TITLE: "计算器",
    ERROR: "错误"
};

var LANG_EN_AILUATOR = window.LANG_EN_AILUATOR;
var LANG_JP_AILUATOR = window.LANG_JP_AILUATOR;
var LANG_KO_AILUATOR = window.LANG_KO_AILUATOR;
var LANG_ZH_AILUATOR = window.LANG_ZH_AILUATOR;
