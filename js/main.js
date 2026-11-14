
/* =================================
   Weather Wiki - Main JavaScript
================================= */

const articles = [
    {
        id: "clouds",
        title: "雲的種類與形成",
        category: "氣象基礎知識",
        categoryId: "basic",
        description: "認識雲的形成過程，以及常見雲種的外觀與特徵。",
        url: "articles/clouds.html",
        keywords: ["雲", "積雲", "層雲", "卷雲", "水氣"],
        content: {
            intro: "雲是大氣中由大量微小水滴或冰晶組成的集合體。當空氣中的水氣冷卻並達到飽和時，水氣會凝結或凝華，形成雲。",
            cause: "當潮濕空氣上升時，周圍氣壓降低，空氣膨脹並冷卻。當溫度降至露點附近，水氣便會在凝結核上形成微小水滴或冰晶，逐漸形成雲。",
            taiwan: "台灣受到季風、地形及海洋水氣影響，不同季節與地區常出現不同種類的雲。例如夏季午後常見積雲發展，山區也容易因地形抬升形成雲層。"
        }
    },
    {
        id: "monsoon",
        title: "台灣季風",
        category: "台灣氣候與天氣系統",
        categoryId: "climate",
        description: "了解東北季風與西南季風，以及季風對台灣天氣的影響。",
        url: "articles/monsoon.html",
        keywords: ["季風", "東北季風", "西南季風", "台灣氣候"],
        content: {
            intro: "季風是隨季節變化而改變主要風向的風系，通常與陸地和海洋受熱差異，以及大尺度氣壓分布有關。",
            cause: "夏季與冬季的氣溫分布不同，使大氣環流及氣壓系統產生季節性變化，進而形成不同方向的季風。",
            taiwan: "台灣冬季主要受到東北季風影響，北部與東半部較容易出現降雨；夏季則常受到西南季風及西南氣流影響，部分地區水氣充足，容易出現降雨。"
        }
    },
    {
        id: "typhoon",
        title: "颱風",
        category: "常見天氣現象",
        categoryId: "phenomena",
        description: "認識颱風的形成條件、基本結構與對台灣的影響。",
        url: "articles/typhoon.html",
        keywords: ["颱風", "熱帶氣旋", "颱風眼", "強風", "降雨"],
        content: {
            intro: "颱風是發展於熱帶或副熱帶海洋上的強烈低氣壓系統，具有明顯的環流結構，並可能帶來強風及大量降雨。",
            cause: "海面溫度較高且水氣充足時，暖濕空氣上升並凝結釋放潛熱，提供系統發展所需的能量。在適當的大氣環境下，低壓環流可能逐漸增強，發展成颱風。",
            taiwan: "台灣位於西北太平洋颱風活動頻繁的區域，颱風可能造成強風、豪雨、淹水及土石流等災害。實際影響會受到颱風路徑、強度與地形等因素影響。"
        }
    },
    {
        id: "heavy-rain",
        title: "豪雨與淹水",
        category: "極端天氣與災害",
        categoryId: "disasters",
        description: "了解豪雨形成的原因，以及大量降雨可能造成的災害。",
        url: "articles/heavy-rain.html",
        keywords: ["豪雨", "淹水", "強降雨", "降雨", "災害"],
        content: {
            intro: "豪雨是短時間內或持續一段時間出現大量降雨的天氣現象。當降雨量超過地面排水或河川承受能力時，便可能發生淹水。",
            cause: "鋒面、颱風及對流雲系都可能帶來大量降雨。當潮濕空氣持續上升並形成旺盛降水時，局部地區可能在短時間內累積大量雨水。",
            taiwan: "台灣地形起伏大，部分地區河川短而陡，加上都市地區地表不透水面積較高，因此在短時間強降雨時，部分地區可能發生積淹水或山區災害。"
        }
    },
    {
        id: "radar",
        title: "氣象雷達",
        category: "氣象觀測與預報",
        categoryId: "observation",
        description: "認識氣象雷達如何利用電磁波觀測降雨與天氣系統。",
        url: "articles/radar.html",
        keywords: ["氣象雷達", "雷達回波", "降雨觀測", "氣象觀測"],
        content: {
            intro: "氣象雷達是一種利用電磁波觀測大氣降水的設備，可以協助氣象人員掌握降雨區域及其移動情形。",
            cause: "雷達會發射電磁波，當電磁波碰到雨滴或其他降水粒子時，部分能量會反射回雷達。透過分析回波訊號，可以估計降水的位置與強度。",
            taiwan: "中央氣象署利用氣象雷達觀測台灣周邊降雨系統，協助監測雷雨、颱風及其他降雨現象。雷達資料也能與衛星及地面觀測資料搭配使用。"
        }
    }
];


/* 首頁精選文章 */

function renderFeaturedArticles() {
    const container = document.getElementById("featuredArticles");
    if (!container) return;

    container.innerHTML = articles.map(article => `
        <a href="${article.url}" class="article-card">
            <span class="article-category">${article.category}</span>
            <h3>${article.title}</h3>
            <p>${article.description}</p>
            <span class="read-more">閱讀文章 →</span>
        </a>
    `).join("");
}


/* 搜尋 */

function searchArticles(keyword) {
    const term = keyword.trim().toLowerCase();
    if (!term) return [];

    return articles.filter(article => {
        const text = [
            article.title,
            article.category,
            article.description,
            ...article.keywords
        ].join(" ").toLowerCase();

        return text.includes(term);
    });
}


function renderSearchResults(keyword) {
    const section = document.getElementById("searchResults");
    const list = document.getElementById("searchResultList");
    const noResult = document.getElementById("noSearchResult");

    if (!section || !list || !noResult) return;

    const results = searchArticles(keyword);

    section.hidden = false;

    list.innerHTML = results.map(article => `
        <a href="${article.url}" class="article-card">
            <span class="article-category">${article.category}</span>
            <h3>${article.title}</h3>
            <p>${article.description}</p>
            <span class="read-more">閱讀文章 →</span>
        </a>
    `).join("");

    noResult.hidden = results.length > 0;

    section.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


function setupSearch() {
    const form = document.getElementById("searchForm");
    const input = document.getElementById("siteSearch");
    const clearButton = document.getElementById("clearSearch");
    const resultSection = document.getElementById("searchResults");

    if (form && input) {
        form.addEventListener("submit", event => {
            event.preventDefault();

            if (!input.value.trim()) {
                input.focus();
                return;
            }

            renderSearchResults(input.value);
        });
    }

    if (clearButton && input && resultSection) {
        clearButton.addEventListener("click", () => {
            input.value = "";
            resultSection.hidden = true;
            input.focus();
        });
    }
}


/* 分類頁面 */

const categoryInfo = {
    basic: {
        number: "CATEGORY 01",
        title: "氣象基礎知識",
        description: "認識大氣與天氣形成的基本原理。"
    },
    climate: {
        number: "CATEGORY 02",
        title: "台灣氣候與天氣系統",
        description: "了解台灣的氣候特徵與主要天氣系統。"
    },
    phenomena: {
        number: "CATEGORY 03",
        title: "常見天氣現象",
        description: "探索日常生活中常見的天氣現象。"
    },
    disasters: {
        number: "CATEGORY 04",
        title: "極端天氣與災害",
        description: "認識極端天氣及其可能造成的影響。"
    },
    observation: {
        number: "CATEGORY 05",
        title: "氣象觀測與預報",
        description: "了解氣象觀測工具與天氣資訊。"
    }
};


function renderCategoryPage() {
    const categoryId = document.body.dataset.category;
    if (!categoryId) return;

    const info = categoryInfo[categoryId];
    if (!info) return;

    const number = document.getElementById("categoryNumber");
    const title = document.getElementById("categoryTitle");
    const description = document.getElementById("categoryDescription");
    const count = document.getElementById("articleCount");
    const container = document.getElementById("categoryArticles");

    if (!container) return;

    if (number) number.textContent = info.number;
    if (title) title.textContent = info.title;
    if (description) description.textContent = info.description;

    const filtered = articles.filter(article =>
        article.categoryId === categoryId
    );

    if (count) count.textContent = `共有 ${filtered.length} 篇文章`;

    container.innerHTML = filtered.map(article => `
        <a href="../${article.url}" class="article-card">
            <span class="article-category">${article.category}</span>
            <h3>${article.title}</h3>
            <p>${article.description}</p>
            <span class="read-more">閱讀文章 →</span>
        </a>
    `).join("");
}


/* 文章頁面 */


function renderArticlePage() {
    const articleId = document.body.dataset.article;
    if (!articleId) return;

    const article = articles.find(item => item.id === articleId);
    if (!article) return;

    const title = document.getElementById("articleTitle");
    const category = document.getElementById("articleCategory");
    const intro = document.getElementById("articleIntro");
    const cause = document.getElementById("articleCause");
    const taiwan = document.getElementById("articleTaiwan");
    const description = document.getElementById("articleDescription");
    const source = document.getElementById("articleSource");

    if (title) title.textContent = article.title;
    if (category) category.textContent = article.category;
    if (intro) intro.textContent = article.content.intro;
    if (cause) cause.textContent = article.content.cause;
    if (taiwan) taiwan.textContent = article.content.taiwan;
    if (description) description.textContent = article.description;

    const sourceData = {
        clouds: {
            name: "中央氣象署－讓我們看雲去",
            url: "https://pweb.cwa.gov.tw/PopularScience/wt/wt_35.html"
        },
        monsoon: {
            name: "中央氣象署－隨季節變換的風：季風",
            url: "https://pweb.cwa.gov.tw/PopularScience/wt/wt_3.html"
        },
        typhoon: {
            name: "中央氣象署－颱風百問",
            url: "https://pweb.cwa.gov.tw/PopularScience/wt/wt_14.html"
        },
        "heavy-rain": {
            name: "中央氣象署－何謂災害性天氣？",
            url: "https://pweb.cwa.gov.tw/PopularScience/pr/pr_11.html"
        },
        radar: {
            name: "中央氣象署－聽見雨的聲音：雷達",
            url: "https://edu.cwa.gov.tw/PopularScience/wt/wt_34.html"
        }
    };

    const sourceInfo = sourceData[articleId];

    if (source && sourceInfo) {
        source.textContent = sourceInfo.name + " →";
        source.href = sourceInfo.url;
    }

    document.title = `${article.title} | Weather Wiki`;
}



/* 手機版選單 */

function setupMobileMenu() {
    const toggle = document.getElementById("menuToggle");
    const nav = document.querySelector(".main-nav");

    if (!toggle || !nav) return;

    toggle.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("open");
        toggle.textContent = isOpen ? "✕" : "☰";
    });
}


/* 初始化 */

document.addEventListener("DOMContentLoaded", () => {
    renderFeaturedArticles();
    setupSearch();
    renderCategoryPage();
    renderArticlePage();
    setupMobileMenu();
});
