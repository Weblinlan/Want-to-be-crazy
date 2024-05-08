<template>
	<div class="w-[100vw] h-[20vw] p-[3vw] pl-[1vw] flex justify-between items-center">
		<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
		     width="10vw" height="10vw" viewBox="0 0 24 24"
		     class="dark:text-[#e8eaf2] text-[#3A455B] iconify iconify--majesticons">
			<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
			      d="M6 8h12M6 12h12M6 16h12"></path>
		</svg>
		<div class="relative"><label for=""><input type="text" placeholder="Love Is Gone (Acoustic)"
		                                           class="dark:from-[#34304b] dark:to-[#403246] dark:border-0 text-[4.47vw] pl-[8vw] bg-gradient-to-r from-[#d9ddfd] text-[#8189A1] to-[#f3d9ef] opacity-0.2 w-[75vw] h-[10vw] border-2 border-[#CCCEF7] rounded-[25px]"></label>
			<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
			     width="1em" height="1em" viewBox="0 0 24 24"
			     class="absolute left-[3.68vw] top-[3vw] w-[4.47vw] h-[4.47vw] text-[#8189A1] iconify iconify--tabler">
				<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
				      d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6"></path>
			</svg>
			<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
			     width="1em" height="1em" viewBox="0 0 24 24"
			     class="absolute right-[3.68vw] top-[3vw] w-[4.47vw] h-[4.47vw] text-[#8189A1] iconify iconify--tabler">
				<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
				      d="M4 7V6a2 2 0 0 1 2-2h2M4 17v1a2 2 0 0 0 2 2h2m8-16h2a2 2 0 0 1 2 2v1m-4 13h2a2 2 0 0 0 2-2v-1M5 12h14"></path>
			</svg>
		</div>
		<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
		     width="8vw" height="8vw" viewBox="0 0 24 24"
		     class="dark:text-[#e8eaf2] text-[#3A455B] iconify iconify--material-symbols">
			<path fill="currentColor"
			      d="m5 10l-.95-2.05L2 7l2.05-.95L5 4l.95 2.05L8 7l-2.05.95L5 10Zm13-3l-.625-1.375L16 5l1.375-.625L18 3l.625 1.375L20 5l-1.375.625L18 7Zm2 4l-.625-1.375L18 9l1.375-.625L20 7l.625 1.375L22 9l-1.375.625L20 11Zm-8 4q-1.25 0-2.125-.875T9 12V6q0-1.25.875-2.125T12 3q1.25 0 2.125.875T15 6v6q0 1.25-.875 2.125T12 15Zm0-6Zm-1 13v-3.075q-2.6-.35-4.3-2.325T5 12h2q0 2.075 1.463 3.538T12 17q2.075 0 3.538-1.463T17 12h2q0 2.625-1.7 4.6T13 18.925V22h-2Zm1-9q.425 0 .713-.288T13 12V6q0-.425-.288-.713T12 5q-.425 0-.713.288T11 6v6q0 .425.288.713T12 13Z"></path>
		</svg>
	</div>
	<div class="w-[100vw] px-[5vw] mt-[2vw]">
		<van-swipe :autoplay="3000" indicator-color="white" class=" rounded-[5vw]">
			<van-swipe-item
					v-for="item in homepageData?.[0]?.extInfo?.banners"
					:key="item.bannerId"
			>
				<van-image
						width="100vw"
						height="36vw"
						fit="cover"
						:src="item.pic"
				></van-image>
			</van-swipe-item>
		</van-swipe>
	</div>
	<div>
		<div class="w-[92vw] mx-auto overflow-hidden scroll-wrapper h-[20vw]">
			<div class="flex w-[190vw] mx-auto overflow-hidden h-[20vw] scroll-content relative">
				<div data-v-7994de73="" class="w-[19vw] scroll-item flex items-center justify-center flex-wrap mr-[6vw]">
					<img
							data-v-7994de73="" src="http://p1.music.126.net/4DpSgAVpJny4Ewf-Xw_WQQ==/109951163986641971.jpg" alt=""
							class="red-image">
					<p data-v-7994de73="" class="dark:text-[#bcbec5] text-[#666F7D] text-center text-[2.78vw] w-[100%] mt-[-2vw]">
						每日推荐</p></div>
				<div data-v-7994de73="" class="w-[19vw] scroll-item flex items-center justify-center flex-wrap mr-[6vw]">
					<img
							data-v-7994de73="" src="http://p1.music.126.net/Shi7cRT1bDhwpVDM7AOFXg==/109951165265330616.jpg" alt=""
							class="red-image">
					<p data-v-7994de73="" class="dark:text-[#bcbec5] text-[#666F7D] text-center text-[2.78vw] w-[100%] mt-[-2vw]">
						私人FM</p></div>
				<div data-v-7994de73="" class="w-[19vw] scroll-item flex items-center justify-center flex-wrap mr-[6vw]">
					<img
							data-v-7994de73="" src="http://p1.music.126.net/uG5p6CnwAHrLqOkaSeRlnA==/109951163986649164.jpg" alt=""
							class="red-image">
					<p data-v-7994de73="" class="dark:text-[#bcbec5] text-[#666F7D] text-center text-[2.78vw] w-[100%] mt-[-2vw]">
						歌单</p></div>
				<div data-v-7994de73="" class="w-[19vw] scroll-item flex items-center justify-center flex-wrap mr-[6vw]">
					<img
							data-v-7994de73="" src="http://p1.music.126.net/SDFC6A3X2wzUCavYyeGIOg==/109951163986649670.jpg" alt=""
							class="red-image">
					<p data-v-7994de73="" class="dark:text-[#bcbec5] text-[#666F7D] text-center text-[2.78vw] w-[100%] mt-[-2vw]">
						排行榜</p></div>
				<div data-v-7994de73="" class="w-[19vw] scroll-item flex items-center justify-center flex-wrap mr-[6vw]">
					<img
							data-v-7994de73="" src="http://p1.music.126.net/Kb4oK0m_ocs3FR3lo-r9yg==/109951167319110429.jpg" alt=""
							class="red-image">
					<p data-v-7994de73="" class="dark:text-[#bcbec5] text-[#666F7D] text-center text-[2.78vw] w-[100%] mt-[-2vw]">
						有声书</p></div>
				<div data-v-7994de73="" class="w-[19vw] scroll-item flex items-center justify-center flex-wrap mr-[6vw]">
					<img
							data-v-7994de73="" src="http://p1.music.126.net/nRWhsf3P7r7eqHz-v61VBg==/109951166989045593.jpg" alt=""
							class="red-image">
					<p data-v-7994de73="" class="dark:text-[#bcbec5] text-[#666F7D] text-center text-[2.78vw] w-[100%] mt-[-2vw]">
						数字专辑</p></div>
				<div data-v-7994de73="" class="w-[19vw] scroll-item flex items-center justify-center flex-wrap mr-[6vw]">
					<img
							data-v-7994de73="" src="http://p1.music.126.net/2JvVZZjcjyCE72fGMsC1hg==/109951166989043011.jpg" alt=""
							class="red-image">
					<p data-v-7994de73="" class="dark:text-[#bcbec5] text-[#666F7D] text-center text-[2.78vw] w-[100%] mt-[-2vw]">
						直播</p></div>
				<div data-v-7994de73="" class="w-[19vw] scroll-item flex items-center justify-center flex-wrap mr-[6vw]">
					<img
							data-v-7994de73="" src="http://p1.music.126.net/BAOWsqZmmxL8JIH-wejMmQ==/109951167294312390.jpg" alt=""
							class="red-image">
					<p data-v-7994de73="" class="dark:text-[#bcbec5] text-[#666F7D] text-center text-[2.78vw] w-[100%] mt-[-2vw]">
						关注新歌</p></div>
				<div data-v-7994de73="" class="w-[19vw] scroll-item flex items-center justify-center flex-wrap mr-[6vw]">
					<img
							data-v-7994de73="" src="http://p1.music.126.net/gk99UFRasebERf38t6A1kA==/109951168168319514.jpg" alt=""
							class="red-image">
					<p data-v-7994de73="" class="dark:text-[#bcbec5] text-[#666F7D] text-center text-[2.78vw] w-[100%] mt-[-2vw]">
						收藏家</p></div>

			</div>
		</div>
	</div>
	<div class="flex justify-between mt-[10px]">
		<div class="ml-[15px]">
			<span class="text-[16px] font-bold ">推荐歌单</span>
			<i class="el-icon-arrow-right font-bold"></i>
		</div>
		<i class="el-icon-more rotate-90 mr-[10px]"></i>
	</div>
	<div class="w-[98vw] h-[46vw] pt-[1vw] overflow-hidden scroll-wrapper border-[#EBEDF2]">
		<div class="w-[210vw] flex pl-[2vw]"
		     style="
		     transform: translateX(0px) translateY(0px) translateZ(1px);
		     transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
		     transition-property: transform;
		     transition-duration: 0ms;"
		>
			<div class="pt-[1vw] relative" style="pointer-events: auto;">
				<div class="w-[31vw] relative z-[1]">
					<div class="dark:bg-[#1A1C23] w-[31vw] h-[31vw] bg-[#f3f3f3] overflow-hidden relative rounded-[8px]">
						<div class="absolute top-0 left-0&quot; abc-enter-active abc-enter-to"><img
								src="http://p1.music.126.net/YGA9Lbal7iE7T3DjjEn86A==/109951168667709218.jpg" alt=""
								class="w-[31vw] h-[31vw] rounded-[8px]"></div>
						<div class="absolute top-0 left-0&quot; abc-leave-active abc-leave-to"><img
								src="http://p1.music.126.net/dp5hyKzyBlfMjLpsD6l4Qw==/109951164464461384.jpg" alt=""
								class="w-[31vw] h-[31vw] rounded-[8px]"></div>
						<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
						     role="img" width="1em" height="1em" viewBox="0 0 24 24"
						     class="absolute text-[#fff] w-[10vw] h-[6vw] right-0 iconify iconify--iconoir">
							<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
							      d="m14 9l-.25.375M10 9a5 5 0 1 0 0 6l.334-.5M10 9l4 6a5 5 0 1 0 0-6"></path>
						</svg>
					</div>
					<p class="dark:text-[#e3e5ec] text-[2.78vw] text-[#3E4759] scroll-item">战歌一响，啥事没有</p></div>
				<div
						class="dark:bg-[#272727] w-[26vw] h-[31vw] bg-[#ddd] absolute top-[0vw] left-1/2 -translate-x-1/2 rounded-[8px] z-[0]"></div>
			</div>
			<div data-v-052bb87c="" class="w-[31vw] ml-[3vw]" style="pointer-events: auto;">
				<div data-v-052bb87c="" class="w-[31vw] h-[31vw] rounded-[8px] overflow-hidden relative pt-[1vw]"><img
						data-v-052bb87c="" src="http://p1.music.126.net/Z_7_3RlHGlEN6Sv8_qyOyA==/109951168998523950.jpg" alt=""
						class="w-[31vw] h-[31vw] rounded-[8px] relative z-[1]">
					<svg data-v-052bb87c="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
					     aria-hidden="true" role="img" width="10" height="10" viewBox="0 0 512 512"
					     class="absolute bottom-[2vw] right-[2.5vw] text-[#fff] w-[5vw] h-[5vw] z-[2] iconify iconify--ion">
						<path fill="currentColor"
						      d="M133 440a35.37 35.37 0 0 1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0 1 35.77.45l247.85 148.36a36 36 0 0 1 0 61l-247.89 148.4A35.5 35.5 0 0 1 133 440"></path>
					</svg>
					<div data-v-052bb87c=""
					     class="absolute top-0 left-0 pr-[2.4vw] pt-[2vw] justify-end font-[800] text-[#fff] flex items-center w-[31vw] z-[2]">
						<svg data-v-052bb87c="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
						     aria-hidden="true" role="img" width="10" height="10" viewBox="0 0 512 512"
						     class="text-[#fff] w-[3vw] h-[3vw] iconify iconify--ion">
							<path fill="currentColor"
							      d="M133 440a35.37 35.37 0 0 1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0 1 35.77.45l247.85 148.36a36 36 0 0 1 0 61l-247.89 148.4A35.5 35.5 0 0 1 133 440"></path>
						</svg>
						<span data-v-052bb87c="" class="font-[800] text-[2.5vw]">197万</span></div>
					<div data-v-052bb87c=""
					     class="dark:bg-[#272727] w-[26vw] h-[31vw] bg-[#ddd] absolute top-[0vw] left-1/2 -translate-x-1/2 rounded-[8px] z-[0]"></div>
				</div>
				<p data-v-052bb87c="" class="dark:text-[#e3e5ec] text-[2.78vw] text-[#3E4759] scroll-item">
					宿命感/氛围感很强的歌曲</p></div>
			<div data-v-052bb87c="" class="w-[31vw] ml-[3vw]" style="pointer-events: auto;">
				<div
						data-v-052bb87c=""
						class="w-[31vw] h-[31vw] rounded-[8px] overflow-hidden relative pt-[1vw]"><img
						data-v-052bb87c=""
						src="http://p1.music.126.net/N1af1QZr5qSsm4ACU94FqQ==/109951169528257302.jpg"
						alt=""
						class="w-[31vw] h-[31vw] rounded-[8px] relative z-[1]">
					<svg
							data-v-052bb87c=""
							xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
							aria-hidden="true"
							role="img" width="10"
							height="10"
							viewBox="0 0 512 512"
							class="absolute bottom-[2vw] right-[2.5vw] text-[#fff] w-[5vw] h-[5vw] z-[2] iconify iconify--ion">
						<path
								fill="currentColor"
								d="
						    M133 440a35.37 35.37 0 0 1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.130 0 1 35.77.45l247.85 148.36a36 36 0 0 1 0 61l-247.89 148.4A35.5 35.5 0 0 1 133 440"
						></path>
					</svg>
					<div
							data-v-052bb87c=""
							class="absolute top-0 left-0 pr-[2.4vw] pt-[2vw] justify-end font-[800] text-[#fff] flex items-center w-[31vw] z-[2]">
						<svg
								data-v-052bb87c=""
								xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
								aria-hidden="true"
								role="img"
								width="10"
								height="10"
								viewBox="0 0 512 512"
								class="text-[#fff] w-[3vw] h-[3vw] iconify iconify--ion">
							<path
									fill="currentColor"
									d="M133 440a35.37 35.37 0 0 1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0 1 35.77.45l247.85 148.36a36 36 0 0 1 0 61l-247.89 148.4A35.5 35.5 0 0 1 133 440"></path>
						</svg>
						<span data-v-052bb87c="" class="font-[800] text-[2.5vw]">126万</span></div>
					<div
							data-v-052bb87c=""
							class="dark:bg-[#272727] w-[26vw] h-[31vw] bg-[#ddd] absolute top-[0vw] left-1/2 -translate-x-1/2 rounded-[8px] z-[0]"></div>
				</div>
				<p data-v-052bb87c="" class="dark:text-[#e3e5ec] text-[2.78vw] text-[#3E4759] scroll-item">逃脱不掉的宿命感
					一听就忍不住落泪</p></div>
			<div data-v-052bb87c="" class="w-[31vw] ml-[3vw]" style="pointer-events: auto;">
				<div
						data-v-052bb87c=""
						class="w-[31vw] h-[31vw] rounded-[8px] overflow-hidden relative pt-[1vw]"><img
						data-v-052bb87c=""
						src="http://p1.music.126.net/hjXLumx4KDDtZcK0qmkK0Q==/109951166071618084.jpg" alt=""
						class="w-[31vw] h-[31vw] rounded-[8px] relative z-[1]">
					<svg
							data-v-052bb87c=""
							xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
							aria-hidden="true"
							role="img"
							width="10"
							height="10"
							viewBox="0 0 512 512"
							class="absolute bottom-[2vw] right-[2.5vw] text-[#fff] w-[5vw] h-[5vw] z-[2] iconify iconify--ion">
						<path
								fill="currentColor"
								d="M133 440a35.37 35.37 0 0 1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0 1 35.77.45l247.85 148.36a36 36 0 0 1 0 61l-247.89 148.4A35.5 35.5 0 0 1 133 440"></path>
					</svg>
					<div
							data-v-052bb87c=""
							class="absolute top-0 left-0 pr-[2.4vw] pt-[2vw] justify-end font-[800] text-[#fff] flex items-center w-[31vw] z-[2]">
						<svg
								data-v-052bb87c=""
								xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
								aria-hidden="true"
								role="img"
								width="10"
								height="10"
								viewBox="0 0 512 512"
								class="text-[#fff] w-[3vw] h-[3vw] iconify iconify--ion">
							<path
									fill="currentColor"
									d="M133 440a35.37 35.37 0 0 1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0 1 35.77.45l247.85 148.36a36 36 0 0 1 0 61l-247.89 148.4A35.5 35.5 0 0 1 133 440"></path>
						</svg>
						<span data-v-052bb87c="" class="font-[800] text-[2.5vw]">652万</span></div>
					<div
							data-v-052bb87c=""
							class="dark:bg-[#272727] w-[26vw] h-[31vw] bg-[#ddd] absolute top-[0vw] left-1/2 -translate-x-1/2 rounded-[8px]z-[0]"
					></div>
				</div>
				<p data-v-052bb87c="" class="dark:text-[#e3e5ec] text-[2.78vw] text-[#3E4759] scroll-item">欧美R&amp;B
					·节奏布鲁斯的轻奢尾调</p></div>
			<div data-v-052bb87c="" class="w-[31vw] ml-[3vw]" style="pointer-events: auto;">
				<div
						data-v-052bb87c=""
						class="w-[31vw] h-[31vw] rounded-[8px] overflow-hidden relative pt-[1vw]"><img
						data-v-052bb87c=""
						src="http://p1.music.126.net/11DTjeUOH2uNKkHxTZDQRQ==/109951167757381020.jpg"
						alt=""
						class="w-[31vw] h-[31vw] rounded-[8px] relative z-[1]">
					<svg
							data-v-052bb87c=""
							xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
							aria-hidden="true"
							role="img"
							width="10"
							height="10"
							viewBox="0 0 512 512"
							class="absolute bottom-[2vw] right-[2.5vw] text-[#fff] w-[5vw] h-[5vw] z-[2] iconify iconify--ion">
						<path
								fill="currentColor"
								d="M133 440a35.37 35.37 0 0 1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0 1 35.77.45l247.85 148.36a36 36 0 0 1 0 61l-247.89 148.4A35.5 35.5 0 0 1 133 440"></path>
					</svg>
					<div data-v-052bb87c=""
					     class="absolute top-0 left-0 pr-[2.4vw] pt-[2vw] justify-end font-[800] text-[#fff] flex items-center w-[31vw] z-[2]">
						<svg
								data-v-052bb87c="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
								aria-hidden="true"
								role="img"
								width="10"
								height="10"
								viewBox="0 0 512 512"
								class="text-[#fff] w-[3vw] h-[3vw] iconify iconify--ion">
							<path
									fill="currentColor"
									d="M133 440a35.37 35.37 0 0 1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0 1 35.77.45l247.85 148.36a36 36 0 0 1 0 61l-247.89 148.4A35.5 35.5 0 0 1 133 440"></path>
						</svg>
						<span data-v-052bb87c="" class="font-[800] text-[2.5vw]">190万</span></div>
					<div
							data-v-052bb87c=""
							class="dark:bg-[#272727] w-[26vw] h-[31vw] bg-[#ddd] absolute top-[0vw] left-1/2 -translate-x-1/2 rounded-[8px] z-[0]"></div>
				</div>
				<p data-v-052bb87c="" class="dark:text-[#e3e5ec] text-[2.78vw] text-[#3E4759] scroll-item">欧美R&amp;B 丨微醺 暧昧
					氛围感</p></div>
			<div data-v-052bb87c="" class="w-[31vw] ml-[3vw]" style="pointer-events: auto;">
				<div
						data-v-052bb87c=""
						class="w-[31vw] h-[31vw] rounded-[8px] overflow-hidden relative pt-[1vw]">
					<img
							data-v-052bb87c=""
							src="http://p1.music.126.net/kVYhrQAyF2dzvJ2VtLRhUw==/109951166287141848.jpg"
							alt=""
							class="w-[31vw] h-[31vw] rounded-[8px] relative z-[1]">
					<svg
							data-v-052bb87c=""
							xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
							aria-hidden="true"
							role="img"
							width="10"
							height="10"
							viewBox="0 0 512 512"
							class="absolute bottom-[2vw] right-[2.5vw] text-[#fff] w-[5vw] h-[5vw] z-[2] iconify iconify--ion">
						<path fill="currentColor"
						      d="M133 440a35.37 35.37 0 0 1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0 1 35.77.45l247.85 148.36a36 36 0 0 1 0 61l-247.89 148.4A35.5 35.5 0 0 1 133 440"></path>
					</svg>
					<div data-v-052bb87c=""
					     class="absolute top-0 left-0 pr-[2.4vw] pt-[2vw] justify-end font-[800] text-[#fff] flex items-center w-[31vw] z-[2]">
						<svg
								data-v-052bb87c=""
								xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
								aria-hidden="true"
								role="img"
								width="10"
								height="10"
								viewBox="0 0 512 512"
								class="text-[#fff] w-[3vw] h-[3vw] iconify iconify--ion">
							<path
									fill="currentColor"
									d="M133 440a35.37 35.37 0 0 1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0 1 35.77.45l247.85 148.36a36 36 0 0 1 0 61l-247.89 148.4A35.5 35.5 0 0 1 133 440"></path>
						</svg>
						<span data-v-052bb87c="" class="font-[800] text-[2.5vw]">17万</span></div>
					<div
							data-v-052bb87c=""
							class="dark:bg-[#272727] w-[26vw] h-[31vw] bg-[#ddd] absolute top-[0vw] left-1/2 -translate-x-1/2 rounded-[8px] z-[0]"></div>
				</div>
				<p data-v-052bb87c="" class="dark:text-[#e3e5ec] text-[2.78vw] text-[#3E4759] scroll-item">
					关于南京热心市民李先生</p></div>
		</div>
	</div>
	<div class="flex justify-between mt-[10px]">
		<div class="ml-[15px]">
			<span class="text-[14px] font-bold">新歌新碟\音乐专辑</span>
			<i class="el-icon-arrow-right font-bold"></i>
		</div>
		<i class="el-icon-more rotate-90 mr-[10px]"></i>
	</div>
	<div class="w-[98vw] pt-[1vw] pl-[2vw] overflow-hidden scroll-wrapper border-[#EBEDF2]">
		<div class="scroll-content flex w-[710vw]"
		     style="transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1); transition-property: transform; transition-duration: 0ms; transform: translateX(-8px) translateY(0px) translateZ(1px);">
			<ul data-v-fcb07e44="" class="w-[88vw] scroll-item pb-[3.8vw]" style="pointer-events: auto;">
				<li data-v-fcb07e44="" class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]">
					<div data-v-fcb07e44="" class="flex"><img data-v-fcb07e44=""
					                                          src="http://p1.music.126.net/TMqzluNtCoyEihb9vJUT6w==/1375489061158167.jpg"
					                                          alt="" class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5">
						<div data-v-fcb07e44="" class="flex-1 pt-[2.85vw] ml-[1vw]"><h4 data-v-fcb07e44=""
						                                                                class="dark:text-[#e3e5ec] text-[3.5vw] text-[#3E465B]">
							My Love Is Gone</h4>
							<p data-v-fcb07e44="" class="dark:text-[#a8aaaf] text-[2.36vw] text-[#79838F]">爱虽然会迟到
								但永远不会消失</p></div>
					</div>
				</li>
				<li data-v-fcb07e44="" class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]">
					<div data-v-fcb07e44="" class="flex"><img data-v-fcb07e44=""
					                                          src="http://p1.music.126.net/JDvrKc2QLc06Q7F49-9oUA==/109951164985311149.jpg"
					                                          alt="" class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5">
						<div data-v-fcb07e44="" class="flex-1 pt-[2.85vw] ml-[1vw]"><h4 data-v-fcb07e44=""
						                                                                class="dark:text-[#e3e5ec] text-[3.5vw] text-[#3E465B]">
							Tick Tick Boom (feat. BygTwo3)</h4>
							<p data-v-fcb07e44="" class="dark:text-[#a8aaaf] text-[2.36vw] text-[#79838F]">小众推荐</p></div>
					</div>
				</li>
				<li data-v-fcb07e44="" class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]">
					<div data-v-fcb07e44="" class="flex"><img data-v-fcb07e44=""
					                                          src="http://p1.music.126.net/lxU4vty4ZasEpluDh2lbPQ==/109951164845981581.jpg"
					                                          alt="" class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5">
						<div data-v-fcb07e44="" class="flex-1 pt-[2.85vw] ml-[1vw]"><h4 data-v-fcb07e44=""
						                                                                class="dark:text-[#e3e5ec] text-[3.5vw] text-[#3E465B]">
							Trap Requiem (Original Mix)</h4>
							<p data-v-fcb07e44="" class="dark:text-[#a8aaaf] text-[2.36vw] text-[#79838F]"></p></div>
					</div>
				</li>
			</ul>
			<ul data-v-fcb07e44="" class="w-[88vw] scroll-item pb-[3.8vw]" style="pointer-events: auto;">
				<li data-v-fcb07e44="" class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]">
					<div data-v-fcb07e44="" class="flex"><img data-v-fcb07e44=""
					                                          src="http://p1.music.126.net/pqmGv8jkqGqOtf9OCxBdnA==/109951165424050683.jpg"
					                                          alt="" class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5">
						<div data-v-fcb07e44="" class="flex-1 pt-[2.85vw] ml-[1vw]"><h4 data-v-fcb07e44=""
						                                                                class="dark:text-[#e3e5ec] text-[3.5vw] text-[#3E465B]">
							The Feeling</h4>
							<p data-v-fcb07e44="" class="dark:text-[#a8aaaf] text-[2.36vw] text-[#79838F]"></p></div>
					</div>
				</li>
				<li data-v-fcb07e44="" class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]">
					<div data-v-fcb07e44="" class="flex"><img data-v-fcb07e44=""
					                                          src="http://p1.music.126.net/yrSMeOFPzFZOYd1S8jTxjQ==/109951165210368552.jpg"
					                                          alt="" class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5">
						<div data-v-fcb07e44="" class="flex-1 pt-[2.85vw] ml-[1vw]"><h4 data-v-fcb07e44=""
						                                                                class="dark:text-[#e3e5ec] text-[3.5vw] text-[#3E465B]">
							Blood On Me</h4>
							<p data-v-fcb07e44="" class="dark:text-[#a8aaaf] text-[2.36vw] text-[#79838F]">小众推荐</p></div>
					</div>
				</li>
				<li data-v-fcb07e44="" class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]">
					<div data-v-fcb07e44="" class="flex"><img data-v-fcb07e44=""
					                                          src="http://p1.music.126.net/CuVuzuO5K5sahrJ3cdm0vA==/109951167970357963.jpg"
					                                          alt="" class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5">
						<div data-v-fcb07e44="" class="flex-1 pt-[2.85vw] ml-[1vw]"><h4 data-v-fcb07e44=""
						                                                                class="dark:text-[#e3e5ec] text-[3.5vw] text-[#3E465B]">
							Dumb</h4>
							<p data-v-fcb07e44="" class="dark:text-[#a8aaaf] text-[2.36vw] text-[#79838F]">但我不想知道
								我只想关注事实</p></div>
					</div>
				</li>
			</ul>
			<ul data-v-fcb07e44="" class="w-[88vw] scroll-item pb-[3.8vw]" style="pointer-events: auto;">
				<li data-v-fcb07e44="" class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]">
					<div data-v-fcb07e44="" class="flex">
						<img data-v-fcb07e44=""
						     src="http://p1.music.126.net/voUIZPY7cINrYgY2yI7QEA==/109951165984351035.jpg"
						     alt=""
						     class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5">
						<div data-v-fcb07e44="" class="flex-1 pt-[2.85vw] ml-[1vw]">
							<h4 data-v-fcb07e44=""
							    class="dark:text-[#e3e5ec] text-[3.5vw] text-[#3E465B]">
								Shakalaka</h4>
							<p data-v-fcb07e44="" class="dark:text-[#a8aaaf] text-[2.36vw] text-[#79838F]">世界再喧闹
								我也会放歌给自己听</p></div>
					</div>
				</li>
				<li data-v-fcb07e44="" class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]">
					<div data-v-fcb07e44="" class="flex"><img data-v-fcb07e44=""
					                                          src="http://p1.music.126.net/ArjLjOln2gwfd7MVsb3X0g==/109951163620082907.jpg"
					                                          alt="" class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5">
						<div data-v-fcb07e44="" class="flex-1 pt-[2.85vw] ml-[1vw]"><h4 data-v-fcb07e44=""
						                                                                class="dark:text-[#e3e5ec] text-[3.5vw] text-[#3E465B]">
							VEGAS (Extended Mix)</h4>
							<p data-v-fcb07e44="" class="dark:text-[#a8aaaf] text-[2.36vw] text-[#79838F]">一支穿云箭
								千军万马来相见</p></div>
					</div>
				</li>
				<li data-v-fcb07e44="" class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]">
					<div data-v-fcb07e44="" class="flex">
						<img data-v-fcb07e44=""
						     src="http://p1.music.126.net/GJyXPzE_Te04X3EEB0AcqA==/109951163132590946.jpg"
						     alt=""
						     class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5">
						<div data-v-fcb07e44="" class="flex-1 pt-[2.85vw] ml-[1vw]">
							<h4 data-v-fcb07e44=""
							    class="dark:text-[#e3e5ec] text-[3.5vw] text-[#3E465B]">
								Dancing Together</h4>
							<p data-v-fcb07e44="" class="dark:text-[#a8aaaf] text-[2.36vw] text-[#79838F]">失踪人口跳着尬舞回归</p>
						</div>
					</div>
				</li>
			</ul>
			<ul data-v-fcb07e44="" class="w-[88vw] scroll-item pb-[3.8vw]" style="pointer-events: auto;">
				<li data-v-fcb07e44="" class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]">
					<div data-v-fcb07e44="" class="flex">
						<img data-v-fcb07e44=""
						     src="http://p1.music.126.net/xuWIk9HlL6S9J77b_S6Liw==/109951168577172478.jpg"
						     alt="" class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5">
						<div data-v-fcb07e44="" class="flex-1 pt-[2.85vw] ml-[1vw]">
							<h4 data-v-fcb07e44=""
							    class="dark:text-[#e3e5ec] text-[3.5vw] text-[#3E465B]">
								Omen</h4>
							<p data-v-fcb07e44="" class="dark:text-[#a8aaaf] text-[2.36vw] text-[#79838F]">是时候表演真正的技术了</p>
						</div>
					</div>
				</li>
				<li data-v-fcb07e44="" class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]">
					<div data-v-fcb07e44="" class="flex">
						<img data-v-fcb07e44=""
						     src="http://p1.music.126.net/kBngCJvOjm4npP0gflDboA==/109951167521749301.jpg"
						     alt=""
						     class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5">
						<div data-v-fcb07e44="" class="flex-1 pt-[2.85vw] ml-[1vw]">
							<h4 data-v-fcb07e44=""
							    class="dark:text-[#e3e5ec] text-[3.5vw] text-[#3E465B]">
								Blinding Lights</h4>
							<p data-v-fcb07e44="" class="dark:text-[#a8aaaf] text-[2.36vw] text-[#79838F]">冬天之后
								我们都是含苞欲放的诗人</p></div>
					</div>
				</li>
				<li data-v-fcb07e44="" class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]">
					<div data-v-fcb07e44="" class="flex">
						<img data-v-fcb07e44=""
						     src="http://p1.music.126.net/w05uN1cA-soklFbbasf9Zg==/109951163311334857.jpg"
						     alt=""
						     class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5">
						<div data-v-fcb07e44="" class="flex-1 pt-[2.85vw] ml-[1vw]">
							<h4 data-v-fcb07e44=""
							    class="dark:text-[#e3e5ec] text-[3.5vw] text-[#3E465B]">
								Deeper Love (Stonebank Remix)</h4>
							<p data-v-fcb07e44="" class="dark:text-[#a8aaaf] text-[2.36vw] text-[#79838F]"></p></div>
					</div>
				</li>
			</ul>
		</div>
	</div>
	<div class="flex justify-between mt-[10px]">
		<div class="ml-[15px]">
			<span class="text-[14px] font-bold">排行榜</span>
			<i class="el-icon-arrow-right font-bold"></i>
		</div>
		<i class="el-icon-more rotate-90 mr-[10px]"></i>
	</div>
	<div class="w-[98vw] pt-[1vw] pl-[2vw] overflow-hidden scroll-wrapper border-[#EBEDF2]">
		<div class="scroll-content flex w-[540vw]">
			<ul data-v-7affce21=""
			    class="ml-[2vw] dark:bg-[#25272e] dark:bg-gradient-n dark:from-000 dark:via-000 dark:to-000 shadows w-[88vw] scroll-item bg-[#fff] mr-[2vw] rounded-[10px] pt-[4vw] pb-[3.8vw] bg-gradient-to from-ff8177 via-ff8c7f to-b12a5b mb-[2vw]">
				<li data-v-7affce21="" class="pl-[2vw] w-[88vw] scroll-content pr-[5vw]">
					<div data-v-7affce21="" class="flex justify-between items-center h-[12vw]">
						<div data-v-7affce21="" class="flex items-center">
							<span data-v-7affce21=""
							      class="dark:text-[#e6e6e9] text-[#374d5b] text-[4vw] font-[800]">星云榜</span>
							<svg data-v-7affce21="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
							     aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24"
							     class="dark:text-[#e6e6e9] font-[800] text-[#3d475b] iconify iconify--mingcute">
								<g fill="none" fill-rule="evenodd">
									<path
											d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
									<path fill="currentColor"
									      d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"></path>
								</g>
							</svg>
						</div>
						<span data-v-7affce21="" class="dark:text-[#8e9097] text-[#939BA1]">精选宝藏新歌</span></div>
				</li>
				<li data-v-7affce21="" class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]">
					<div data-v-7affce21="" class="flex"><img data-v-7affce21=""
					                                          src="http://p1.music.126.net/4-ihqWsiRaKVB9uQUIwQrQ==/109951169510771909.jpg"
					                                          alt="" class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5">
						<div data-v-7affce21="" class="flex-1 ml-[1vw] flex items-center pr-[5.7vw] pl-[3.26vw]">
							<div data-v-7affce21="" class="leading-[14vw] font-[800] flex-3 mr-[3vw] text-[#C28E28] text-[2.8vw]">1
							</div>
							<div data-v-7affce21="" class="w-[40vw]"><h4 data-v-7affce21=""
							                                             class="dark:text-[#ebeaf0] text-[3.5vw] text-[#3E465B] text-ellipsis overflow-hidden whitespace-nowrap w-[40vw]">
								罗马</h4>
								<p data-v-7affce21="" class="dark:text-[#a5a7ae] text-[2.36vw] text-[#79838F]">杨和苏KeyNG</p></div>
							<div data-v-7affce21="" class="leading-[14vw] flex-3 ml-[4vw] text-[2.43vw]">
								<span data-v-7affce21=""
								      class="text-[#FF3836]">霸榜</span>
							</div>
						</div>
					</div>
				</li>
				<li data-v-7affce21="" class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]">
					<div data-v-7affce21="" class="flex"><img data-v-7affce21=""
					                                          src="http://p1.music.126.net/sDCM9NWkp1-MtLGsKvQOqw==/109951169501813454.jpg"
					                                          alt="" class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5">
						<div data-v-7affce21="" class="flex-1 ml-[1vw] flex items-center pr-[5.7vw] pl-[3.26vw]">
							<div data-v-7affce21="" class="leading-[14vw] font-[800] flex-3 mr-[3vw] text-[#818AAC] text-[2.8vw]">2
							</div>
							<div data-v-7affce21="" class="w-[40vw]"><h4 data-v-7affce21=""
							                                             class="dark:text-[#ebeaf0] text-[3.5vw] text-[#3E465B] text-ellipsis overflow-hidden whitespace-nowrap w-[40vw]">
								我在原地等你</h4>
								<p data-v-7affce21="" class="dark:text-[#a5a7ae] text-[2.36vw] text-[#79838F]">HUSH</p></div>
							<div data-v-7affce21="" class="leading-[14vw] flex-3 ml-[4vw] text-[2.43vw]">
								<span data-v-7affce21=""
								      class="text-[#FF3836]">霸榜</span>
							</div>
						</div>
					</div>
				</li>
				<li data-v-7affce21="" class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]">
					<div data-v-7affce21="" class="flex"><img data-v-7affce21=""
					                                          src="http://p1.music.126.net/dzSZAgIjIYJ3iLqFfKrrlQ==/109951169510761055.jpg"
					                                          alt="" class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5">
						<div data-v-7affce21="" class="flex-1 ml-[1vw] flex items-center pr-[5.7vw] pl-[3.26vw]">
							<div data-v-7affce21="" class="leading-[14vw] font-[800] flex-3 mr-[3vw] text-[#CD8354] text-[2.8vw]">3
							</div>
							<div data-v-7affce21="" class="w-[40vw]">
								<h4 data-v-7affce21=""
								    class="dark:text-[#ebeaf0] text-[3.5vw] text-[#3E465B] text-ellipsis overflow-hidden whitespace-nowrap w-[40vw]">
									Fortnight</h4>
								<p data-v-7affce21="" class="dark:text-[#a5a7ae] text-[2.36vw] text-[#79838F]">Taylor Swift</p></div>
							<div data-v-7affce21="" class="leading-[14vw] flex-3 ml-[4vw] text-[2.43vw]"><span data-v-7affce21=""
							                                                                                   class="text-[#FF3836]">霸榜</span>
							</div>
						</div>
					</div>
				</li>
			</ul>
			<ul data-v-7affce21=""
			    class="ml-[2vw] dark:bg-[#25272e] dark:bg-gradient-n dark:from-000 dark:via-000 dark:to-000 shadows w-[88vw] scroll-item bg-[#fff] mr-[2vw] rounded-[10px] pt-[4vw] pb-[3.8vw] bg-gradient-to from-ff8177 via-ff8c7f to-b12a5b mb-[2vw]">
				<li data-v-7affce21="" class="pl-[2vw] w-[88vw] scroll-content pr-[5vw]">
					<div data-v-7affce21="" class="flex justify-between items-center h-[12vw]">
						<div data-v-7affce21="" class="flex items-center"><span data-v-7affce21=""
						                                                        class="dark:text-[#e6e6e9] text-[#374d5b] text-[4vw] font-[800]">星云榜</span>
							<svg data-v-7affce21="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
							     aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24"
							     class="dark:text-[#e6e6e9] font-[800] text-[#3d475b] iconify iconify--mingcute">
								<g fill="none" fill-rule="evenodd">
									<path
											d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
									<path fill="currentColor"
									      d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"></path>
								</g>
							</svg>
						</div>
						<span data-v-7affce21="" class="dark:text-[#8e9097] text-[#939BA1]">精选宝藏新歌</span></div>
				</li>
				<li data-v-7affce21="" class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]">
					<div data-v-7affce21="" class="flex"><img data-v-7affce21=""
					                                          src="http://p1.music.126.net/4-ihqWsiRaKVB9uQUIwQrQ==/109951169510771909.jpg"
					                                          alt="" class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5">
						<div data-v-7affce21="" class="flex-1 ml-[1vw] flex items-center pr-[5.7vw] pl-[3.26vw]">
							<div data-v-7affce21="" class="leading-[14vw] font-[800] flex-3 mr-[3vw] text-[#C28E28] text-[2.8vw]">1
							</div>
							<div data-v-7affce21="" class="w-[40vw]"><h4 data-v-7affce21=""
							                                             class="dark:text-[#ebeaf0] text-[3.5vw] text-[#3E465B] text-ellipsis overflow-hidden whitespace-nowrap w-[40vw]">
								罗马</h4>
								<p data-v-7affce21="" class="dark:text-[#a5a7ae] text-[2.36vw] text-[#79838F]">杨和苏KeyNG</p></div>
							<div data-v-7affce21="" class="leading-[14vw] flex-3 ml-[4vw] text-[2.43vw]">
								<span data-v-7affce21=""
								      class="text-[#FF3836]">霸榜</span>
							</div>
						</div>
					</div>
				</li>
				<li data-v-7affce21="" class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]">
					<div data-v-7affce21="" class="flex"><img data-v-7affce21=""
					                                          src="http://p1.music.126.net/sDCM9NWkp1-MtLGsKvQOqw==/109951169501813454.jpg"
					                                          alt="" class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5">
						<div data-v-7affce21="" class="flex-1 ml-[1vw] flex items-center pr-[5.7vw] pl-[3.26vw]">
							<div data-v-7affce21="" class="leading-[14vw] font-[800] flex-3 mr-[3vw] text-[#818AAC] text-[2.8vw]">2
							</div>
							<div data-v-7affce21="" class="w-[40vw]">
								<h4 data-v-7affce21=""
								    class="dark:text-[#ebeaf0] text-[3.5vw] text-[#3E465B] text-ellipsis overflow-hidden whitespace-nowrap w-[40vw]">
									我在原地等你</h4>
								<p data-v-7affce21="" class="dark:text-[#a5a7ae] text-[2.36vw] text-[#79838F]">HUSH</p></div>
							<div data-v-7affce21="" class="leading-[14vw] flex-3 ml-[4vw] text-[2.43vw]">
								<span data-v-7affce21=""
								      class="text-[#FF3836]">霸榜</span>
							</div>
						</div>
					</div>
				</li>
				<li data-v-7affce21="" class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]">
					<div data-v-7affce21="" class="flex"><img data-v-7affce21=""
					                                          src="http://p1.music.126.net/dzSZAgIjIYJ3iLqFfKrrlQ==/109951169510761055.jpg"
					                                          alt="" class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5">
						<div data-v-7affce21="" class="flex-1 ml-[1vw] flex items-center pr-[5.7vw] pl-[3.26vw]">
							<div data-v-7affce21="" class="leading-[14vw] font-[800] flex-3 mr-[3vw] text-[#CD8354] text-[2.8vw]">3
							</div>
							<div data-v-7affce21="" class="w-[40vw]">
								<h4 data-v-7affce21=""
								    class="dark:text-[#ebeaf0] text-[3.5vw] text-[#3E465B] text-ellipsis overflow-hidden whitespace-nowrap w-[40vw]">
									Fortnight</h4>
								<p data-v-7affce21="" class="dark:text-[#a5a7ae] text-[2.36vw] text-[#79838F]">Taylor Swift</p></div>
							<div data-v-7affce21="" class="leading-[14vw] flex-3 ml-[4vw] text-[2.43vw]">
								<span data-v-7affce21=""
								      class="text-[#FF3836]">霸榜</span>
							</div>
						</div>
					</div>
				</li>
			</ul>
			<ul data-v-7affce21=""
			    class="ml-[2vw] dark:bg-[#25272e] dark:bg-gradient-n dark:from-000 dark:via-000 dark:to-000 shadows w-[88vw] scroll-item bg-[#fff] mr-[2vw] rounded-[10px] pt-[4vw] pb-[3.8vw] bg-gradient-to from-ff8177 via-ff8c7f to-b12a5b mb-[2vw]">
				<li data-v-7affce21="" class="pl-[2vw] w-[88vw] scroll-content pr-[5vw]">
					<div data-v-7affce21="" class="flex justify-between items-center h-[12vw]">
						<div data-v-7affce21="" class="flex items-center">
							<span data-v-7affce21=""
							      class="dark:text-[#e6e6e9] text-[#374d5b] text-[4vw] font-[800]">热歌榜</span>
							<svg data-v-7affce21="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
							     aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24"
							     class="dark:text-[#e6e6e9] font-[800] text-[#3d475b] iconify iconify--mingcute">
								<g fill="none" fill-rule="evenodd">
									<path
											d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
									<path fill="currentColor"
									      d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"></path>
								</g>
							</svg>
						</div>
						<span data-v-7affce21="" class="dark:text-[#8e9097] text-[#939BA1]">云村用户都在听</span></div>
				</li>
				<li data-v-7affce21="" class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]">
					<div data-v-7affce21="" class="flex"><img data-v-7affce21=""
					                                          src="http://p1.music.126.net/kGdzpMO7C-8ERTcwymW4sA==/109951169315856070.jpg"
					                                          alt="" class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5">
						<div data-v-7affce21="" class="flex-1 ml-[1vw] flex items-center pr-[5.7vw] pl-[3.26vw]">
							<div data-v-7affce21="" class="leading-[14vw] font-[800] flex-3 mr-[3vw] text-[#C28E28] text-[2.8vw]">1
							</div>
							<div data-v-7affce21="" class="w-[40vw]">
								<h4 data-v-7affce21=""
								    class="dark:text-[#ebeaf0] text-[3.5vw] text-[#3E465B] text-ellipsis overflow-hidden whitespace-nowrap w-[40vw]">
									如果爱忘了 (live)</h4>
								<p data-v-7affce21="" class="dark:text-[#a5a7ae] text-[2.36vw] text-[#79838F]">汪苏泷</p></div>
							<div data-v-7affce21="" class="leading-[14vw] flex-3 ml-[4vw] text-[2.43vw]">
								<span data-v-7affce21=""
								      class="text-[#FF3836]">霸榜</span>
							</div>
						</div>
					</div>
				</li>
				<li data-v-7affce21="" class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]">
					<div data-v-7affce21="" class="flex">
						<img data-v-7affce21=""
						     src="http://p1.music.126.net/9FhSEQtMhP-JP3_U84YfWQ==/109951165798773745.jpg"
						     alt="" class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5">
						<div data-v-7affce21="" class="flex-1 ml-[1vw] flex items-center pr-[5.7vw] pl-[3.26vw]">
							<div data-v-7affce21="" class="leading-[14vw] font-[800] flex-3 mr-[3vw] text-[#818AAC] text-[2.8vw]">2
							</div>
							<div data-v-7affce21="" class="w-[40vw]">
								<h4 data-v-7affce21=""
								    class="dark:text-[#ebeaf0] text-[3.5vw] text-[#3E465B] text-ellipsis overflow-hidden whitespace-nowrap w-[40vw]">
									还是会想你</h4>
								<p data-v-7affce21="" class="dark:text-[#a5a7ae] text-[2.36vw] text-[#79838F]">林达浪</p></div>
							<div data-v-7affce21="" class="leading-[14vw] flex-3 ml-[4vw] text-[2.43vw]">
								<span data-v-7affce21=""
								      class="text-[#FF3836]">霸榜</span>
							</div>
						</div>
					</div>
				</li>
				<li data-v-7affce21="" class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]">
					<div data-v-7affce21="" class="flex"><img data-v-7affce21=""
					                                          src="http://p1.music.126.net/RjiI9yP2Fnxx5cxiTVCIrQ==/109951169318905148.jpg"
					                                          alt="" class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5">
						<div data-v-7affce21="" class="flex-1 ml-[1vw] flex items-center pr-[5.7vw] pl-[3.26vw]">
							<div data-v-7affce21="" class="leading-[14vw] font-[800] flex-3 mr-[3vw] text-[#CD8354] text-[2.8vw]">3
							</div>
							<div data-v-7affce21="" class="w-[40vw]">
								<h4 data-v-7affce21=""
								    class="dark:text-[#ebeaf0] text-[3.5vw] text-[#3E465B] text-ellipsis overflow-hidden whitespace-nowrap w-[40vw]">
									5:20AM</h4>
								<p data-v-7affce21="" class="dark:text-[#a5a7ae] text-[2.36vw] text-[#79838F]">刀酱</p></div>
							<div data-v-7affce21="" class="leading-[14vw] flex-3 ml-[4vw] text-[2.43vw]">
								<span data-v-7affce21=""
								      class="text-[#FF3836]">霸榜</span>
							</div>
						</div>
					</div>
				</li>
			</ul>
			<ul data-v-7affce21=""
			    class="ml-[2vw] dark:bg-[#25272e] dark:bg-gradient-n dark:from-000 dark:via-000 dark:to-000 shadows w-[88vw] scroll-item bg-[#fff] mr-[2vw] rounded-[10px] pt-[4vw] pb-[3.8vw] bg-gradient-to from-ff8177 via-ff8c7f to-b12a5b mb-[2vw]">
				<li data-v-7affce21="" class="pl-[2vw] w-[88vw] scroll-content pr-[5vw]">
					<div data-v-7affce21="" class="flex justify-between items-center h-[12vw]">
						<div data-v-7affce21="" class="flex items-center">
							<span data-v-7affce21=""
							      class="dark:text-[#e6e6e9] text-[#374d5b] text-[4vw] font-[800]">原创榜</span>
							<svg data-v-7affce21="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
							     aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24"
							     class="dark:text-[#e6e6e9] font-[800] text-[#3d475b] iconify iconify--mingcute">
								<g fill="none" fill-rule="evenodd">
									<path
											d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
									<path fill="currentColor"
									      d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"></path>
								</g>
							</svg>
						</div>
						<span data-v-7affce21="" class="dark:text-[#8e9097] text-[#939BA1]">最佳独立原创音乐</span></div>
				</li>
				<li data-v-7affce21="" class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]">
					<div data-v-7affce21="" class="flex"><img data-v-7affce21=""
					                                          src="http://p1.music.126.net/DER95M8-BNOR2LEydXb83g==/109951169534547973.jpg"
					                                          alt="" class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5">
						<div data-v-7affce21="" class="flex-1 ml-[1vw] flex items-center pr-[5.7vw] pl-[3.26vw]">
							<div data-v-7affce21="" class="leading-[14vw] font-[800] flex-3 mr-[3vw] text-[#C28E28] text-[2.8vw]">1
							</div>
							<div data-v-7affce21="" class="w-[40vw]"><h4 data-v-7affce21=""
							                                             class="dark:text-[#ebeaf0] text-[3.5vw] text-[#3E465B] text-ellipsis overflow-hidden whitespace-nowrap w-[40vw]">
								Next Story</h4>
								<p data-v-7affce21="" class="dark:text-[#a5a7ae] text-[2.36vw] text-[#79838F]">NINEONE#乃万</p></div>
							<div data-v-7affce21="" class="leading-[14vw] flex-3 ml-[4vw] text-[2.43vw]">
								<span data-v-7affce21=""
								      class="text-[#FF3836]">热门</span>
							</div>
						</div>
					</div>
				</li>
				<li data-v-7affce21="" class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]">
					<div data-v-7affce21="" class="flex"><img data-v-7affce21=""
					                                          src="http://p1.music.126.net/S00wuLgzLy_DHqetZq-0Xw==/109951169545652819.jpg"
					                                          alt="" class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5">
						<div data-v-7affce21="" class="flex-1 ml-[1vw] flex items-center pr-[5.7vw] pl-[3.26vw]">
							<div data-v-7affce21="" class="leading-[14vw] font-[800] flex-3 mr-[3vw] text-[#818AAC] text-[2.8vw]">2
							</div>
							<div data-v-7affce21="" class="w-[40vw]"><h4 data-v-7affce21=""
							                                             class="dark:text-[#ebeaf0] text-[3.5vw] text-[#3E465B] text-ellipsis overflow-hidden whitespace-nowrap w-[40vw]">
								青春当入樽 Streetball Boy</h4>
								<p data-v-7affce21="" class="dark:text-[#a5a7ae] text-[2.36vw] text-[#79838F]">royster lee</p></div>
							<div data-v-7affce21="" class="leading-[14vw] flex-3 ml-[4vw] text-[2.43vw]">
								<span data-v-7affce21=""
								      class="text-[#39B184]">新晋</span>
							</div>
						</div>
					</div>
				</li>
				<li data-v-7affce21="" class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]">
					<div data-v-7affce21="" class="flex"><img data-v-7affce21=""
					                                          src="http://p1.music.126.net/6xdtFb9MpuBsqd73mYThDA==/109951169541563639.jpg"
					                                          alt="" class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5">
						<div data-v-7affce21="" class="flex-1 ml-[1vw] flex items-center pr-[5.7vw] pl-[3.26vw]">
							<div data-v-7affce21="" class="leading-[14vw] font-[800] flex-3 mr-[3vw] text-[#CD8354] text-[2.8vw]">3
							</div>
							<div data-v-7affce21="" class="w-[40vw]"><h4 data-v-7affce21=""
							                                             class="dark:text-[#ebeaf0] text-[3.5vw] text-[#3E465B] text-ellipsis overflow-hidden whitespace-nowrap w-[40vw]">
								再见</h4>
								<p data-v-7affce21="" class="dark:text-[#a5a7ae] text-[2.36vw] text-[#79838F]">h3R3</p></div>
							<div data-v-7affce21="" class="leading-[14vw] flex-3 ml-[4vw] text-[2.43vw]"><span data-v-7affce21=""
							                                                                                   class="text-[#39B184]">新晋</span>
							</div>
						</div>
					</div>
				</li>
			</ul>
			<ul data-v-7affce21=""
			    class="ml-[2vw] dark:bg-[#25272e] dark:bg-gradient-n dark:from-000 dark:via-000 dark:to-000 shadows w-[88vw] scroll-item bg-[#fff] mr-[2vw] rounded-[10px] pt-[4vw] pb-[3.8vw] bg-gradient-to from-ff8177 via-ff8c7f to-b12a5b mb-[2vw]">
				<li data-v-7affce21="" class="pl-[2vw] w-[88vw] scroll-content pr-[5vw]">
					<div data-v-7affce21="" class="flex justify-between items-center h-[12vw]">
						<div data-v-7affce21="" class="flex items-center"><span data-v-7affce21=""
						                                                        class="dark:text-[#e6e6e9] text-[#374d5b] text-[4vw] font-[800]">网络热歌榜</span>
							<svg data-v-7affce21="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
							     aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24"
							     class="dark:text-[#e6e6e9] font-[800] text-[#3d475b] iconify iconify--mingcute">
								<g fill="none" fill-rule="evenodd">
									<path
											d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
									<path fill="currentColor"
									      d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"></path>
								</g>
							</svg>
						</div>
						<span data-v-7affce21="" class="dark:text-[#8e9097] text-[#939BA1]">全网用户都在听</span></div>
				</li>
				<li data-v-7affce21="" class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]">
					<div data-v-7affce21="" class="flex"><img data-v-7affce21=""
					                                          src="http://p1.music.126.net/9AP_AJLaACliGYpclAlz2g==/109951169534405328.jpg"
					                                          alt="" class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5">
						<div data-v-7affce21="" class="flex-1 ml-[1vw] flex items-center pr-[5.7vw] pl-[3.26vw]">
							<div data-v-7affce21="" class="leading-[14vw] font-[800] flex-3 mr-[3vw] text-[#C28E28] text-[2.8vw]">1
							</div>
							<div data-v-7affce21="" class="w-[40vw]"><h4 data-v-7affce21=""
							                                             class="dark:text-[#ebeaf0] text-[3.5vw] text-[#3E465B] text-ellipsis overflow-hidden whitespace-nowrap w-[40vw]">
								如果可以 (Live版)</h4>
								<p data-v-7affce21="" class="dark:text-[#a5a7ae] text-[2.36vw] text-[#79838F]">汪苏泷</p></div>
							<div data-v-7affce21="" class="leading-[14vw] flex-3 ml-[4vw] text-[2.43vw]"><span data-v-7affce21=""
							                                                                                   class="text-[#FF3836]">热门</span>
							</div>
						</div>
					</div>
				</li>
				<li data-v-7affce21="" class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]">
					<div data-v-7affce21="" class="flex"><img data-v-7affce21=""
					                                          src="http://p1.music.126.net/VPNLn1n7R97SZih1Q3dzhg==/109951169395433314.jpg"
					                                          alt="" class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5">
						<div data-v-7affce21="" class="flex-1 ml-[1vw] flex items-center pr-[5.7vw] pl-[3.26vw]">
							<div data-v-7affce21="" class="leading-[14vw] font-[800] flex-3 mr-[3vw] text-[#818AAC] text-[2.8vw]">2
							</div>
							<div data-v-7affce21="" class="w-[40vw]"><h4 data-v-7affce21=""
							                                             class="dark:text-[#ebeaf0] text-[3.5vw] text-[#3E465B] text-ellipsis overflow-hidden whitespace-nowrap w-[40vw]">
								还是会想你</h4>
								<p data-v-7affce21="" class="dark:text-[#a5a7ae] text-[2.36vw] text-[#79838F]">DJ铁柱</p></div>
							<div data-v-7affce21="" class="leading-[14vw] flex-3 ml-[4vw] text-[2.43vw]">
								<span data-v-7affce21=""
								      class="text-[#39B184]">新晋</span>
							</div>
						</div>
					</div>
				</li>
				<li data-v-7affce21="" class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]">
					<div data-v-7affce21="" class="flex"><img data-v-7affce21=""
					                                          src="http://p1.music.126.net/9AP_AJLaACliGYpclAlz2g==/109951169534405328.jpg"
					                                          alt="" class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5">
						<div data-v-7affce21="" class="flex-1 ml-[1vw] flex items-center pr-[5.7vw] pl-[3.26vw]">
							<div data-v-7affce21="" class="leading-[14vw] font-[800] flex-3 mr-[3vw] text-[#CD8354] text-[2.8vw]">3
							</div>
							<div data-v-7affce21="" class="w-[40vw]">
								<h4 data-v-7affce21=""
								    class="dark:text-[#ebeaf0] text-[3.5vw] text-[#3E465B] text-ellipsis overflow-hidden whitespace-nowrap w-[40vw]">
									最后一页 (Live版)</h4>
								<p data-v-7affce21="" class="dark:text-[#a5a7ae] text-[2.36vw] text-[#79838F]">王赫野</p></div>
							<div data-v-7affce21="" class="leading-[14vw] flex-3 ml-[4vw] text-[2.43vw]">
								<span data-v-7affce21=""
								      class="text-[#39B184]">新晋</span>
							</div>
						</div>
					</div>
				</li>
			</ul>
			<ul data-v-7affce21=""
			    class="ml-[2vw] dark:bg-[#25272e] dark:bg-gradient-n dark:from-000 dark:via-000 dark:to-000 shadows w-[88vw] scroll-item bg-[#fff] mr-[2vw] rounded-[10px] pt-[4vw] pb-[3.8vw] bg-gradient-to from-ff8177 via-ff8c7f to-b12a5b mb-[2vw]">
				<li data-v-7affce21="" class="pl-[2vw] w-[88vw] scroll-content pr-[5vw]">
					<div data-v-7affce21="" class="flex justify-between items-center h-[12vw]">
						<div data-v-7affce21="" class="flex items-center"><span data-v-7affce21=""
						                                                        class="dark:text-[#e6e6e9] text-[#374d5b] text-[4vw] font-[800]">MV榜</span>
							<svg data-v-7affce21="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
							     aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24"
							     class="dark:text-[#e6e6e9] font-[800] text-[#3d475b] iconify iconify--mingcute">
								<g fill="none" fill-rule="evenodd">
									<path
											d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
									<path fill="currentColor"
									      d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"></path>
								</g>
							</svg>
						</div>
						<span data-v-7affce21="" class="dark:text-[#8e9097] text-[#939BA1]">云村用户都在看</span></div>
				</li>
				<li data-v-7affce21="" class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]">
					<div data-v-7affce21="" class="flex"><img data-v-7affce21=""
					                                          src="http://p1.music.126.net/EDRAklfw5xr3TBwSKwEZ4g==/109951169565098995.jpg"
					                                          alt="" class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5">
						<div data-v-7affce21="" class="flex-1 ml-[1vw] flex items-center pr-[5.7vw] pl-[3.26vw]">
							<div data-v-7affce21="" class="leading-[14vw] font-[800] flex-3 mr-[3vw] text-[#C28E28] text-[2.8vw]">1
							</div>
							<div data-v-7affce21="" class="w-[40vw]">
								<h4 data-v-7affce21=""
								    class="dark:text-[#ebeaf0] text-[3.5vw] text-[#3E465B] text-ellipsis overflow-hidden whitespace-nowrap w-[40vw]">
									那些我尚未知道的美丽</h4>
								<p data-v-7affce21="" class="dark:text-[#a5a7ae] text-[2.36vw] text-[#79838F]"></p></div>
							<div data-v-7affce21="" class="leading-[14vw] flex-3 ml-[4vw] text-[2.43vw]">
								<span data-v-7affce21=""
								      class="text-[#FF3836]">热门</span>
							</div>
						</div>
					</div>
				</li>
				<li data-v-7affce21="" class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]">
					<div data-v-7affce21="" class="flex"><img data-v-7affce21=""
					                                          src="http://p1.music.126.net/Gr4QMEy4Qzj2YsVpvkgUQw==/109951169566849685.jpg"
					                                          alt="" class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5">
						<div data-v-7affce21="" class="flex-1 ml-[1vw] flex items-center pr-[5.7vw] pl-[3.26vw]">
							<div data-v-7affce21="" class="leading-[14vw] font-[800] flex-3 mr-[3vw] text-[#818AAC] text-[2.8vw]">2
							</div>
							<div data-v-7affce21="" class="w-[40vw]">
								<h4 data-v-7affce21=""
								    class="dark:text-[#ebeaf0] text-[3.5vw] text-[#3E465B] text-ellipsis overflow-hidden whitespace-nowrap w-[40vw]">
									How I Shine MV</h4>
								<p data-v-7affce21="" class="dark:text-[#a5a7ae] text-[2.36vw] text-[#79838F]"></p></div>
							<div data-v-7affce21="" class="leading-[14vw] flex-3 ml-[4vw] text-[2.43vw]"><span data-v-7affce21=""
							                                                                                   class="text-[#39B184]">新晋</span>
							</div>
						</div>
					</div>
				</li>
				<li data-v-7affce21="" class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]">
					<div data-v-7affce21="" class="flex"><img data-v-7affce21=""
					                                          src="http://p1.music.126.net/n-3PwnRT7KZmQaHqSQ41mg==/109951169410645887.jpg"
					                                          alt="" class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5">
						<div data-v-7affce21="" class="flex-1 ml-[1vw] flex items-center pr-[5.7vw] pl-[3.26vw]">
							<div data-v-7affce21="" class="leading-[14vw] font-[800] flex-3 mr-[3vw] text-[#CD8354] text-[2.8vw]">3
							</div>
							<div data-v-7affce21="" class="w-[40vw]"><h4 data-v-7affce21=""
							                                             class="dark:text-[#ebeaf0] text-[3.5vw] text-[#3E465B] text-ellipsis overflow-hidden whitespace-nowrap w-[40vw]">
								若月亮没来 (若是月亮还没来)</h4>
								<p data-v-7affce21="" class="dark:text-[#a5a7ae] text-[2.36vw] text-[#79838F]"></p></div>
							<div data-v-7affce21="" class="leading-[14vw] flex-3 ml-[4vw] text-[2.43vw]">
								<span data-v-7affce21=""
								      class="text-[#FF3836]">飙升</span>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
	<div class="flex justify-between mt-[10px]">
		<div class="ml-[15px]">
			<span class="text-[14px] font-bold">热门话题</span>
			<i class="el-icon-arrow-right font-bold"></i>
		</div>
		<i class="el-icon-more rotate-90 mr-[10px]"></i>
	</div>
	<div class="w-[95vw] ml-[4vw] overflow-hidden scroll-wrapper">
		<div class="w-[330vw] flex mb-[6.31vw] scroll-content"
		     style="transform: translateX(0px) translateY(0px) translateZ(1px);">
			<div data-v-bdb6bc0e=""
			     class="relative bg-[#9C9C9C] w-[68vw] h-[28vw] scroll-item rounded-[10px] py-[4vw] px-[3vw] mr-[2.83vw]"
			     style="background-color: rgb(148, 148, 148);">
				<h4 data-v-bdb6bc0e="" class="text-[4vw] text-[#fff] flex items-center">
					<svg data-v-bdb6bc0e="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
					     aria-hidden="true" role="img" width="4vw" height="4vw" viewBox="0 0 32 32"
					     class="iconify iconify--raphael" style="color: rgb(255, 255, 255);">
						<path fill="currentColor"
						      d="M16 5.333c-7.732 0-14 4.7-14 10.5c0 1.982.74 3.833 2.016 5.414L2 25.667l5.613-1.44c2.34 1.316 5.237 2.106 8.387 2.106c7.732 0 14-4.7 14-10.5s-6.268-10.5-14-10.5"></path>
					</svg>
					与银河对视
				</h4>
				<p data-v-bdb6bc0e="" class="text-[2.6vw] text-[#D7D7D7]">484万热度</p>
				<p data-v-bdb6bc0e="" class="text-[2.6vw] text-[#fff] w-[42vw] text-ellipsis h-[10vw] overflow-hidden">
					我们是宇宙中最浪漫的乘车客。</p>
				<img data-v-bdb6bc0e=""
				     src="http://p1.music.126.net/k6s_BYKfQk38jSyEWWdQuA==/109951165474239956.jpg"
				     alt=""
				     class="w-[13.75vw] h-[13.75vw] rounded-[12px] absolute right-[2.9vw] bottom-[2.9vw]">
			</div>
			<div data-v-bdb6bc0e=""
			     class="relative bg-[#9C9C9C] w-[68vw] h-[28vw] scroll-item rounded-[10px] py-[4vw] px-[3vw] mr-[2.83vw]"
			     style="background-color: rgb(134, 133, 170);">
				<h4 data-v-bdb6bc0e="" class="text-[4vw] text-[#fff] flex items-center">
					<svg data-v-bdb6bc0e="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
					     aria-hidden="true" role="img" width="4vw" height="4vw" viewBox="0 0 32 32"
					     class="iconify iconify--raphael" style="color: rgb(255, 255, 255);">
						<path fill="currentColor"
						      d="M16 5.333c-7.732 0-14 4.7-14 10.5c0 1.982.74 3.833 2.016 5.414L2 25.667l5.613-1.44c2.34 1.316 5.237 2.106 8.387 2.106c7.732 0 14-4.7 14-10.5s-6.268-10.5-14-10.5"></path>
					</svg>
					心之所向是燕园
				</h4>
				<p data-v-bdb6bc0e="" class="text-[2.6vw] text-[#D7D7D7]">484万热度</p>
				<p data-v-bdb6bc0e="" class="text-[2.6vw] text-[#fff] w-[42vw] text-ellipsis h-[10vw] overflow-hidden">
					2022高考/新高考一卷/历生政选手/拉文克劳六年级在读/记录我所热爱的
					“虽千万人，吾往矣”
					-永远热爱生活
					-应当诗意地栖息在这大地上
					-对于文科：情不知所起，一往而深
					-希望能一直带着热爱，奔赴山海!祝你也祝我
					/
					- 单纯记录 少更勿念 私信选回
					-平时记录学习app：番茄TODO/costudy
					番茄自习室：CBCD3BF
					（ball ball you 进去了就好好用番茄学习好吗）
					✐ ᵕ̈ 最后 今天也别忘记加油哦！</p>
				<img data-v-bdb6bc0e=""
				     src="http://p1.music.126.net/ucIkwjPrUZML6sdKrf2wSA==/109951164968211955.jpg"
				     alt=""
				     class="w-[13.75vw] h-[13.75vw] rounded-[12px] absolute right-[2.9vw] bottom-[2.9vw]">
			</div>
			<div data-v-bdb6bc0e=""
			     class="relative bg-[#9C9C9C] w-[68vw] h-[28vw] scroll-item rounded-[10px] py-[4vw] px-[3vw] mr-[2.83vw]"
			     style="background-color: rgb(174, 115, 78);">
				<h4 data-v-bdb6bc0e="" class="text-[4vw] text-[#fff] flex items-center">
					<svg data-v-bdb6bc0e="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
					     aria-hidden="true" role="img" width="4vw" height="4vw" viewBox="0 0 32 32"
					     class="iconify iconify--raphael" style="color: rgb(255, 255, 255);">
						<path fill="currentColor"
						      d="M16 5.333c-7.732 0-14 4.7-14 10.5c0 1.982.74 3.833 2.016 5.414L2 25.667l5.613-1.44c2.34 1.316 5.237 2.106 8.387 2.106c7.732 0 14-4.7 14-10.5s-6.268-10.5-14-10.5"></path>
					</svg>
					miiiiissu
				</h4>
				<p data-v-bdb6bc0e="" class="text-[2.6vw] text-[#D7D7D7]">484万热度</p>
				<p
						data-v-bdb6bc0e=""
						class="text-[2.6vw] text-[#fff] w-[42vw] text-ellipsis h-[10vw] overflow-hidden">
					走进我的影子</p>
				<img
						data-v-bdb6bc0e=""
						src="http://p1.music.126.net/ry9x6JKkhzzbVYXsgUrTGg==/109951169349655479.jpg" alt=""
						class="w-[13.75vw] h-[13.75vw] rounded-[12px] absolute right-[2.9vw] bottom-[2.9vw]">
			</div>
			<div data-v-bdb6bc0e=""
			     class="relative bg-[#9C9C9C] w-[68vw] h-[28vw] scroll-item rounded-[10px] py-[4vw] px-[3vw] mr-[2.83vw]"
			     style="background-color: rgb(148, 148, 148);">
				<h4 data-v-bdb6bc0e="" class="text-[4vw] text-[#fff] flex items-center">
					<svg data-v-bdb6bc0e="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
					     aria-hidden="true" role="img" width="4vw" height="4vw" viewBox="0 0 32 32"
					     class="iconify iconify--raphael" style="color: rgb(255, 255, 255);">
						<path fill="currentColor"
						      d="M16 5.333c-7.732 0-14 4.7-14 10.5c0 1.982.74 3.833 2.016 5.414L2 25.667l5.613-1.44c2.34 1.316 5.237 2.106 8.387 2.106c7.732 0 14-4.7 14-10.5s-6.268-10.5-14-10.5"></path>
					</svg>
					耳機听什麼歌
				</h4>
				<p data-v-bdb6bc0e="" class="text-[2.6vw] text-[#D7D7D7]">484万热度</p>
				<p data-v-bdb6bc0e="" class="text-[2.6vw] text-[#fff] w-[42vw] text-ellipsis h-[10vw] overflow-hidden"></p> <img
					data-v-bdb6bc0e="" src="http://p1.music.126.net/2JwuGEfXiWwXyEU3npa7Tg==/109951168538329448.jpg" alt=""
					class="w-[13.75vw] h-[13.75vw] rounded-[12px] absolute right-[2.9vw] bottom-[2.9vw]"></div>
			<div data-v-bdb6bc0e=""
			     class="relative bg-[#9C9C9C] w-[68vw] h-[28vw] scroll-item rounded-[10px] py-[4vw] px-[3vw] mr-[2.83vw]"
			     style="background-color: rgb(134, 133, 170);">
				<h4 data-v-bdb6bc0e="" class="text-[4vw] text-[#fff] flex items-center">
					<svg data-v-bdb6bc0e="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
					     aria-hidden="true" role="img" width="4vw" height="4vw" viewBox="0 0 32 32"
					     class="iconify iconify--raphael" style="color: rgb(255, 255, 255);">
						<path fill="currentColor"
						      d="M16 5.333c-7.732 0-14 4.7-14 10.5c0 1.982.74 3.833 2.016 5.414L2 25.667l5.613-1.44c2.34 1.316 5.237 2.106 8.387 2.106c7.732 0 14-4.7 14-10.5s-6.268-10.5-14-10.5"></path>
					</svg>
					到十九号房间去
				</h4>
				<p data-v-bdb6bc0e="" class="text-[2.6vw] text-[#D7D7D7]">484万热度</p>
				<p
						data-v-bdb6bc0e=""
						class="text-[2.6vw] text-[#fff] w-[42vw] text-ellipsis h-[10vw] overflow-hidden">
					置顶我的感受</p>
				<img data-v-bdb6bc0e=""
				     src="http://p1.music.126.net/vXK5THvOI32BoEt5LedRpw==/109951169303990223.jpg" alt=""
				     class="w-[13.75vw] h-[13.75vw] rounded-[12px] absolute right-[2.9vw] bottom-[2.9vw]">
			</div>
		</div>
	</div>
	<div class="flex justify-between mt-[10px]">
		<div class="ml-[15px]">
			<span class="text-[14px] font-bold">音乐日历</span>
			<i class="el-icon-arrow-right font-bold"></i>
		</div>
		<i class="el-icon-more rotate-90 mr-[10px]"></i>
	</div>
	<div class="w-[91vw] pt-[1vw] ml-[2vw] overflow-hidden scroll-wrapper border-[#EBEDF2]">
		<div class="scroll-content flex w-[540vw] mb-[6.31vw]">
			<ul class="dark:bg-[#25272e] w-[91vw] scroll-item shadows bg-[#fff] mr-[2vw] rounded-[10px] px-[4vw] pt-[4vw] pb-[3.8vw]">
				<li class="flex mt-[3vw]">
					<div class="flex-1"><p class="dark:text-[#ebeaf0] text-[2.72vw] text-[#AAADB5]">5/8</p>
						<div class="dark:text-[#a5a7ae] text-[3.68vw] text-[#3E4558]">도경수 (D.O.)的专辑：성장 - THE 3RD MINI ALBUM</div>
					</div>
					<div class="flex-4"><img
							src="http://p1.music.126.net/ncJi2E3bplaWTS02FM-nbw==/109951169566812138.jpg" alt=""
							class="w-[15vw] h-[15vw] rounded-[10px]"></div>
				</li>
				<li class="flex mt-[3vw]">
					<div class="flex-1"><p class="dark:text-[#ebeaf0] text-[2.72vw] text-[#AAADB5]">5/8</p>
						<div class="dark:text-[#a5a7ae] text-[3.68vw] text-[#3E4558]">炸药的专辑：比李景亮爷们的男人</div>
					</div>
					<div class="flex-4"><img
							src="http://p1.music.126.net/5n3WgS15icMBqug_PWnNgA==/109951169569727073.jpg" alt=""
							class="w-[15vw] h-[15vw] rounded-[10px]"></div>
				</li>
			</ul>
		</div>
	</div>
	<div class="bg-[#fff] fixed z-[3] van-hairline--top-bottom van-tabbar van-tabbar--fixed">
		<div class="van-tabbar-item van-tabbar-item--active">
			<div class="van-tabbar-item__icon">
				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
				     width="1em" height="1em" viewBox="0 0 24 24" class="iconify iconify--ri">
					<path fill="currentColor"
					      d="M12.001 22c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10m-1.086-10.432c.24-.84 1.075-1.541 1.99-1.648c.187.694.388 1.373.545 2.063c.053.23.037.495-.018.727c-.213.892-1.248 1.242-1.978.685c-.53-.405-.742-1.12-.539-1.827m3.817-.197c-.125-.465-.256-.927-.393-1.42c.5.13.907.36 1.255.697c1.257 1.222 1.385 3.3.294 4.732c-1.135 1.49-3.155 2.134-5.028 1.605c-2.302-.65-3.808-2.952-3.441-5.316c.274-1.768 1.27-3.004 2.9-3.733c.407-.182.58-.56.42-.93c-.157-.364-.54-.504-.944-.343c-2.721 1.088-4.32 4.134-3.67 6.987c.713 3.118 3.495 5.163 6.675 4.859c1.732-.166 3.164-.948 4.216-2.347c1.506-2.002 1.297-4.783-.463-6.499c-.666-.65-1.471-1.018-2.39-1.153c-.083-.013-.217-.052-.232-.106c-.087-.313-.18-.632-.206-.954c-.029-.357.29-.64.65-.645c.253-.003.434.13.603.3c.303.3.704.322.988.062c.29-.264.296-.678.018-1.008c-.566-.672-1.586-.891-2.43-.523c-.847.37-1.321 1.187-1.2 2.093c.038.28.11.557.167.842l-.26.072a3.863 3.863 0 0 0-2.098 1.414c-.921 1.22-.936 2.828-.041 3.947c1.274 1.594 3.747 1.284 4.523-.568c.284-.677.275-1.368.087-2.065"></path>
				</svg><!----></div>
			<div class="van-tabbar-item__text">首页</div>
		</div>
		<div class="van-tabbar-item">
			<div class="van-tabbar-item__icon">
				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
				     width="1em" height="1em" viewBox="0 0 512 512" class="iconify iconify--ion">
					<path fill="currentColor" d="M160 32h192v448H160zm224 160h112v288H384zM16 128h112v352H16z"></path>
				</svg><!----></div>
			<div class="van-tabbar-item__text">排行榜</div>
		</div>
		<div class="van-tabbar-item">
			<div class="van-tabbar-item__icon">
				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
				     width="1em" height="1em" viewBox="0 0 24 24" class="iconify iconify--mingcute">
					<g fill="none">
						<path
								d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
						<path fill="currentColor"
						      d="M21 5.18V17a4 4 0 1 1-2-3.465V9.181L9 10.847V18c0 .06-.005.117-.015.174A3.5 3.5 0 1 1 7 15.337v-8.49a2 2 0 0 1 1.671-1.973l10-1.666A2 2 0 0 1 21 5.18M5.5 17a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M17 15a2 2 0 1 0 0 4a2 2 0 0 0 0-4m2-9.82L9 6.847V8.82l10-1.667z"></path>
					</g>
				</svg><!----></div>
			<div class="van-tabbar-item__text">我的</div>
		</div>
		<div class="van-tabbar-item">
			<div class="van-tabbar-item__icon">
				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
				     width="1em" height="1em" viewBox="0 0 24 24" class="iconify iconify--iconoir">
					<g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5">
						<path stroke-linecap="round" d="M12 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></path>
						<path
								d="M22 17.28a2.28 2.28 0 0 1-.662 1.606c-.976.984-1.923 2.01-2.936 2.958a.597.597 0 0 1-.823-.017l-2.918-2.94a2.28 2.28 0 0 1 0-3.214a2.277 2.277 0 0 1 3.233 0l.106.107l.106-.107A2.277 2.277 0 0 1 22 17.28Z"></path>
						<path stroke-linecap="round" d="M5 20v-1a7 7 0 0 1 10-6.326"></path>
					</g>
				</svg><!----></div>
			<div class="van-tabbar-item__text">关注</div>
		</div>
		<div class="van-tabbar-item">
			<div class="van-tabbar-item__icon">
				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
				     width="1em" height="1em" viewBox="0 0 256 256" class="iconify iconify--ph">
					<path fill="currentColor"
					      d="M144 140a12 12 0 1 1-12-12a12 12 0 0 1 12 12m44-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12m51.34 83.47a16 16 0 0 1-19.87 19.87l-24.71-7.27a80 80 0 0 1-108.33-40.65a79 79 0 0 1-25.19-7.35l-24.71 7.27a16 16 0 0 1-19.87-19.87l7.27-24.71a80 80 0 1 1 145.65-66.17a80 80 0 0 1 62.49 114.17ZM81.3 166.3a79.94 79.94 0 0 1 70.38-93.87a64 64 0 0 0-112.13 61.76a8 8 0 0 1 .63 6L32 168l27.76-8.17a8 8 0 0 1 6 .63a63.5 63.5 0 0 0 15.54 5.84m135.15 15.89a64 64 0 1 0-26.26 26.26a8 8 0 0 1 6-.63L224 216l-8.17-27.76a8 8 0 0 1 .62-6.05"></path>
				</svg><!----></div>
			<div class="van-tabbar-item__text">社区</div>
		</div>
	</div>

</template>
<script>
import {ref} from "vue";
import {getHomePageData, getDragonball} from "../service";
import BetterScroll from "../components/BetterScroll.vue";

export default {
	setup() {
		const homepageData = ref({});
		const homepageDragonball = ref([]);
		(async () => {
			try {
				homepageData.value = (await getHomePageData()).data.data.blocks;
				homepageDragonball.value = (await getDragonball()).data.data;
				console.log(homepageData.value);
				console.log(homepageDragonball.value)
			} catch (error) {
				console.log(error);
			}
		})();
		return {homepageData, homepageDragonball};
	},
};
</script>
