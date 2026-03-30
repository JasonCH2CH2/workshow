// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 作品集分类筛选功能
    initPortfolioFilter();
    
    // 文章时间排序功能
    initArticleSort();
    
    // 项目详情查看功能
    initProjectDetails();
});

// 作品集分类筛选
function initPortfolioFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // 移除所有按钮的active类
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // 添加当前按钮的active类
                this.classList.add('active');
                
                const filter = this.getAttribute('data-filter');
                
                // 筛选项目卡片
                projectCards.forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
}

// 文章时间排序
function initArticleSort() {
    const sortButtons = document.querySelectorAll('.sort-btn');
    const articleList = document.querySelector('.article-list');
    const articleItems = Array.from(document.querySelectorAll('.article-item'));
    
    if (sortButtons.length > 0) {
        sortButtons.forEach(button => {
            button.addEventListener('click', function() {
                // 移除所有按钮的active类
                sortButtons.forEach(btn => btn.classList.remove('active'));
                // 添加当前按钮的active类
                this.classList.add('active');
                
                const sort = this.getAttribute('data-sort');
                
                // 排序文章
                articleItems.sort((a, b) => {
                    const dateA = new Date(a.getAttribute('data-date'));
                    const dateB = new Date(b.getAttribute('data-date'));
                    
                    if (sort === 'newest') {
                        return dateB - dateA;
                    } else {
                        return dateA - dateB;
                    }
                });
                
                // 重新添加文章到列表
                articleItems.forEach(item => {
                    articleList.appendChild(item);
                });
            });
        });
    }
}

// 项目详情查看
function initProjectDetails() {
    const viewDetailsButtons = document.querySelectorAll('.view-details');
    
    if (viewDetailsButtons.length > 0) {
        viewDetailsButtons.forEach(button => {
            button.addEventListener('click', function() {
                const projectCard = this.closest('.project-card');
                const projectName = projectCard.querySelector('h3').textContent;
                
                // 这里可以添加项目详情的显示逻辑，比如弹出模态框
                // 目前暂时使用alert显示项目名称
                alert(`查看项目：${projectName}`);
            });
        });
    }
}