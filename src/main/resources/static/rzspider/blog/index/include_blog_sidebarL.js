// 一开始便加载
$(document)
		.ready(
				function() {
					// 先判断屏幕大小，小屏不再显示侧边栏后续操作直接屏蔽
					if ($(window).width() < 974) {
						// 不再渲染侧边栏
						return;
					}

					if (blogset.stylesetShowLeftSiderbar == 0) {
						// 请求推荐信息(不包括关于我关于本站)
						blogRecommendListData();
						// 请求标签信息
						blogTagsListData();
					} else {
						return;
					}

					setTabSetL();
					// 初始化界面推荐
					if (blogRecommendList != null && blogRecommendList != '') {
						// 初始化侧边栏
						// 特别推荐
						if (blogRecommendList.specialRecommendedBlogcontentList != null
								&& blogRecommendList.specialRecommendedBlogcontentList != ''
								&& blogRecommendList.specialRecommendedBlogcontentList.length > 0) {
							// 显示
							// $("#specialRecommendedL").css('display',
							// 'block');
							// 生成
							var html = '';
							var imgHtml = '';
							for (var i = 0; i < blogRecommendList.specialRecommendedBlogcontentList.length; i++) {
								imgHtml = getSpecialRecommendedImg(
										blogRecommendList.specialRecommendedBlogcontentList[i],
										blogset.blogsetDefaultPic)
								html = html
										+ '<li>'
										+ imgHtml
										+ '<p>'
										+ blogRecommendList.specialRecommendedBlogcontentList[i].title
										+ '<span><a href="/rzblog/blogcontent/details/'
										+ blogRecommendList.specialRecommendedBlogcontentList[i].showId
										+ '" >阅读</a></span></p></li>';
							}
							// 添加
							document.getElementById('showSpecialRecommendedL')
									.insertAdjacentHTML('afterBegin', html)
						}

						// 列表推荐
						if (blogRecommendList.recommendedBlogcontentList != null
								&& blogRecommendList.recommendedBlogcontentList != ''
								&& blogRecommendList.recommendedBlogcontentList.length > 0) {
							// 生成
							var html = '';
							var imgHtml = '';
							for (var i = 0; i < blogRecommendList.recommendedBlogcontentList.length; i++) {
								imgHtml = getRecommendedImg(blogRecommendList.recommendedBlogcontentList[i])
								html = html
										+ '<li><a href="/rzblog/blogcontent/details/'
										+ blogRecommendList.recommendedBlogcontentList[i].showId
										+ '"  title="'
										+ blogRecommendList.recommendedBlogcontentList[i].title
										+ '">'
										+ imgHtml
										+ '</a><p class="ellipsisp'
										+ (imgHtml == '' ? '0' : '1')
										+ '"><a href="/rzblog/blogcontent/details/'
										+ blogRecommendList.recommendedBlogcontentList[i].showId
										+ '"  title="'
										+ blogRecommendList.recommendedBlogcontentList[i].title
										+ '">'
										+ blogRecommendList.recommendedBlogcontentList[i].title
										+ '</a></p>'
										+ (imgHtml == '' ? ''
												: '<span class="span1">'
														+ blogRecommendList.recommendedBlogcontentList[i].gtmCreate
														+ '</span>') + '</li>'
							}
							// 添加
							document.getElementById('recommendedL')
									.insertAdjacentHTML('afterBegin', html)
						}

						// 点赞排行
						if (blogRecommendList.likeBlogcontentList != null
								&& blogRecommendList.likeBlogcontentList != ''
								&& blogRecommendList.likeBlogcontentList.length > 0) {
							// 生成
							var html = '';
							var imgHtml = '';
							for (var i = 0; i < blogRecommendList.likeBlogcontentList.length; i++) {
								imgHtml = getRecommendedImg(blogRecommendList.likeBlogcontentList[i])
								html = html
										+ '<li><a href="/rzblog/blogcontent/details/'
										+ blogRecommendList.likeBlogcontentList[i].showId
										+ '"  title="'
										+ blogRecommendList.likeBlogcontentList[i].title
										+ '">'
										+ imgHtml
										+ '</a><p class="ellipsisp'
										+ (imgHtml == '' ? '0' : '1')
										+ '"><a href="/rzblog/blogcontent/details/'
										+ blogRecommendList.likeBlogcontentList[i].showId
										+ '"  title="'
										+ blogRecommendList.likeBlogcontentList[i].title
										+ '">'
										+ blogRecommendList.likeBlogcontentList[i].title
										+ '</a></p>'
										+ (imgHtml == '' ? ''
												: '<span>'
														+ blogRecommendList.likeBlogcontentList[i].gtmCreate
														+ '</span>') + '</li>'
							}
							// 添加
							document.getElementById('likeBlogcontentL')
									.insertAdjacentHTML('afterBegin', html)
						}
						// 点击排行
						if (blogRecommendList.browseBlogcontentList != null
								&& blogRecommendList.browseBlogcontentList != ''
								&& blogRecommendList.browseBlogcontentList.length > 0) {
							// 生成
							var html = '';
							var imgHtml = '';
							for (var i = 0; i < blogRecommendList.browseBlogcontentList.length; i++) {
								imgHtml = getRecommendedImg(blogRecommendList.browseBlogcontentList[i])
								html = html
										+ '<li><a href="/rzblog/blogcontent/details/'
										+ blogRecommendList.browseBlogcontentList[i].showId
										+ '"  title="'
										+ blogRecommendList.browseBlogcontentList[i].title
										+ '">'
										+ imgHtml
										+ '</a><p class="ellipsisp'
										+ (imgHtml == '' ? '0' : '1')
										+ '"><a href="/rzblog/blogcontent/details/'
										+ blogRecommendList.browseBlogcontentList[i].showId
										+ '"  title="'
										+ blogRecommendList.browseBlogcontentList[i].title
										+ '">'
										+ blogRecommendList.browseBlogcontentList[i].title
										+ '</a></p>'
										+ (imgHtml == '' ? ''
												: '<span>'
														+ blogRecommendList.browseBlogcontentList[i].gtmCreate
														+ '</span>') + '</li>'
							}
							// 添加
							document.getElementById('browseBlogcontentL')
									.insertAdjacentHTML('afterBegin', html)
						}

						$(".ellipsisp0").css("-webkit-line-clamp", "1")
						$(".ellipsisp1").css("-webkit-line-clamp", "2")
					}

					// 初始化博主简介
					// $("#aboutmeL").css('display', 'block');
					if (blogset.bloggersetBloggerProfile != null
							&& blogset.bloggersetBloggerProfile != '') {
						// 显示头像
						$("#showProfileL").css('display', 'block');
						document.getElementById('showProfileImgL').src = blogset.bloggersetBloggerProfile;
					}

					// 初始化云标签
					if (blogTagsList != null && blogTagsList.length > 0) {
						// 显示
						// $("#cloudL").css('display', 'block');
						// 生成
						var html = '';
						for (var i = 0; i < blogTagsList.length; i++) {
							html = html + '<a href="/rzblog/blogtags/?tags='
									+ blogTagsList[i].blogTagsName
									+ '" >'
									+ blogTagsList[i].blogTagsName + '</a>';
						}
						// 添加
						document.getElementById('showTagsL')
								.insertAdjacentHTML('afterBegin', html)
					}

					// 初始化显示参数
					// 解析json友链
					var obj = "{}";
					if (blogsetFriendLinks.replace(/(^s*)|(s*$)/g, "").length != 0) {
						obj = JSON.parse(blogsetFriendLinks);
						if (obj != null) {
							if (obj.length != 0) {
								// 显示
								// $("#linksL").css('display', 'block');
								// 遍历添加已存在的参数
								for ( var index in obj) {
									key = obj[index].key;
									value = obj[index].value;
									// 写到网页中
									dynamicAddBlogsetFriendLinksL(key, value)
								}
							}
						}
					}

					// 初始化其他
					var obj2 = "{}";
					if (blogsetSidebarOtherMessage.replace(/(^s*)|(s*$)/g, "").length != 0) {
						obj = JSON.parse(blogsetSidebarOtherMessage);
						if (obj != null) {
							if (obj.length != 0) {
								// 遍历添加已存在的参数
								for ( var index in obj) {
									key = obj[index].key;
									value = obj[index].value;
									// 写到网页中
									dynamicAddBlogsetSidebarOtherMessageL(key,
											value)
								}
							}
						}
					}
					// 需要在所有动态加载完设置此，否则位移不准确
					// 设置固定关注我们
					/*
					 * if ($('#follow-usL')) { var followUsPosition2 =
					 * $('#follow-usL').offset().top; window.onscroll =
					 * function() { var nowPosition2 =
					 * document.documentElement.scrollTop; if (nowPosition2 -
					 * followUsPosition2 > 0) { setTimeout( function() {
					 * if(blogset.stylesetShowRightSiderbar == 0){
					 * $('#follow-us').attr('class', 'guanzhu gd'); }
					 * if(blogset.stylesetShowLeftSiderbar == 0){
					 * $('#follow-usL').attr('class', 'guanzhu gd'); } }, 150); }
					 * else { $('#follow-usL').attr('class', 'guanzhu'); } }; }
					 */
				})

// 动态添加
function dynamicAddBlogsetFriendLinksL(key, value) {
	html = '<li><a href="' + value + '" >' + key + '</a></li>';
	// 添加到增加参数按钮之前
	document.getElementById('linksLiL').insertAdjacentHTML('afterbegin', html)
}
// 动态添加
function dynamicAddBlogsetSidebarOtherMessageL(key, value) {
	html = '<div class="links" id="' + key
			+ 'L" style="display: none"><h2 class="hometitle">' + key
			+ '</h2><p>' + value + '</p></div>'

	// 添加到增加参数按钮之前
	document.getElementById('follow-usL').insertAdjacentHTML('beforebegin',
			html)
}

// 列表推荐点赞点击排行图片没有就算，有封面用封面没有封面用内容图
function getRecommendedImg(content) {
	var image = '';
	var imgArray;
	if (content.cover != null && (content.cover.indexOf('/blogfiles/') == 0)) {
		image = content.cover;
	} else if (blogset.blogsetNoCoverpicUseContentpic == 0) {
		// 使用内容图片
		imgArray = getContentImgArray(content);
		if (imgArray != null && imgArray.length > 0) {
			// 内容图片第一张
			image = imgArray[0];
		} else {
			return image;
		}
	} else {
		return image;
	}
	return '<i><img src="' + image + '"></i>';
}
function setTabSetL() {
	// 列表推荐点击排行点赞排行分割
	// tab
	var oLi = document.getElementById("tabL").getElementsByTagName("a");
	var oUls = document.getElementsByName("sidenewsL");
	for (var i = 0; i < oLi.length; i++) {
		if (i == 0) {
			oLi[i].style.padding = "0 10px 0 0px";
		} else {
			oLi[i].style.padding = "0 10px";
		}
		oLi[i].index = i;
		oLi[i].onmouseover = function() {
			for (var n = 0; n < oLi.length; n++)
				oLi[n].className = "";
			this.className = "current";
			for (var n = 0; n < oUls.length; n++)
				oUls[n].style.display = "none";
			oUls[this.index].style.display = "block"
		}
	}
}