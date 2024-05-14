<template>
	<div class="pb-[5vw]">
		<div class="w-[91vw] h-[20vw] mx-auto flex justify-between items-center">
			<svg
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					aria-hidden="true"
					role="img"
					width="8vw"
					height="8vw"
					viewBox="0 0 256 256"
					class="text-[#000] dark:text-[#e9e9e9] iconify iconify--ph"
			>
				<path
						fill="currentColor"
						d="M222 128a6 6 0 0 1-6 6H54.49l61.75 61.76a6 6 0 1 1-8.48 8.48l-72-72a6 6 0 0 1 0-8.48l72-72a6 6 0 0 1 8.48 8.48L54.49 122H216a6 6 0 0 1 6 6"
				></path>
			</svg>
			<div class="relative">
				<label for=""
				><input
						placeholder="Beyond"
						type="text"
						class="dark:border-2 dark:border-[#31333a] dark:bg-[#31333a] dark:text-[#e9e9e9] text-[3vw] pl-[11vw] bg-white opacity-0.2 text-[#9b9b9b] w-[72vw] h-[10vw] border-2 border-[#fff] rounded-[25px]"
				/></label>
				<svg
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						aria-hidden="true"
						role="img"
						width="4.3vw"
						height="4.3vw"
						viewBox="0 0 24 24"
						class="absolute left-[3.68vw] top-[3vw] text-[#000] dark:text-[#e9e9e9] iconify iconify--tabler"
						style="color: rgb(111, 119, 143)"
				>
					<path
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6"
					></path>
				</svg>
				<!---->
			</div>
			<div
					class="font-semibold text-[3.7vw] dark:text-[#e9e9e9] text-[#283349]"
			>
				搜索
			</div>
		</div>
		<div>
			<div class="flex justify-around align-items: center mt-[3vw]">
				<div
						class="dark:border-[#2e2c35] flex w-[25vw] justify-center items-center border-[#E3E5EA] border-r-[0.4vw]"
				>
					<svg
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							aria-hidden="true"
							role="img"
							width="5vw"
							height="5vw"
							viewBox="0 0 24 24"
							class="iconify iconify--octicon mb-2.5"
							style="color: red"
					>
						<path
								fill="currentColor"
								d="M12 2.5a5.25 5.25 0 0 0-2.519 9.857a9.005 9.005 0 0 0-6.477 8.37a.75.75 0 0 0 .727.773H20.27a.75.75 0 0 0 .727-.772a9.005 9.005 0 0 0-6.477-8.37A5.25 5.25 0 0 0 12 2.5"
						></path>
					</svg>
					<p
							class="ml-[2vw] text-[#000] dark:text-[#e9e9e9] font-[800] text-[3.4vw]"
					>
						歌手
					</p>
				</div>
				<div
						class="dark:border-[#2e2c35] flex w-[25vw] justify-center items-center border-[#E3E5EA] border-r-[0.4vw]"
				>
					<svg
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							aria-hidden="true"
							role="img"
							width="5vw"
							height="5vw"
							viewBox="0 0 36 36"
							class="iconify iconify--clarity mb-2.5"
							style="color: red"
					>
						<path
								fill="currentColor"
								d="M10 5.2h18v1.55H10z"
								class="clr-i-solid clr-i-solid-path-1"
						></path>
						<path
								fill="currentColor"
								d="M29 8H9.86A1.89 1.89 0 0 1 8 6a2 2 0 0 1 1.86-2H29a1 1 0 1 0 0-2H9.86A4 4 0 0 0 6 6a4.14 4.14 0 0 0 0 .49a1 1 0 0 0 0 .24V30a4 4 0 0 0 3.86 4H29a1 1 0 0 0 1-1V9.07A1.07 1.07 0 0 0 29 8"
								class="clr-i-solid clr-i-solid-path-2"
						></path>
						<path fill="none" d="M0 0h36v36H0z"></path>
					</svg>
					<p
							class="ml-[2vw] text-[#000] dark:text-[#e9e9e9] font-[800] text-[3.4vw]"
					>
						曲风
					</p>
				</div>
				<div
						class="dark:border-[#2e2c35] flex w-[25vw] justify-center items-center border-[#E3E5EA] border-r-[0.4vw]"
				>
					<svg
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							aria-hidden="true"
							role="img"
							width="5vw"
							height="5vw"
							viewBox="0 0 32 32"
							class="iconify iconify--fluent-emoji-high-contrast mb-2.5"
							style="color: red"
					>
						<g fill="currentColor">
							<path
									d="m14.36 3.004l-6.14.8c-.32.04-.56.32-.56.64v7.62c-.57-.2-1.2-.28-1.86-.21c-2.05.22-3.67 1.92-3.8 3.98a4.268 4.268 0 0 0 4.27 4.55c2.36 0 4.28-1.91 4.28-4.28c0-.09 0-.18-.01-.27v-7.83c0-.28.21-.52.49-.56l3.46-.45a.53.53 0 0 0 .46-.53v-2.93a.52.52 0 0 0-.59-.53m15.04 2.37l-6.14.8c-.32.04-.56.31-.56.63v10.01c-.57-.2-1.2-.28-1.86-.21c-2.05.22-3.67 1.92-3.8 3.98a4.268 4.268 0 0 0 4.27 4.55c2.36 0 4.28-1.91 4.28-4.28c0-.09 0-.18-.01-.27v-10.21c0-.28.21-.52.49-.56l3.46-.45c.27-.04.47-.26.47-.53v-2.94c0-.32-.28-.56-.6-.52"
							></path>
							<path
									d="m13.09 10.654l6.14-.8c.32-.05.6.2.6.52v2.93c0 .27-.2.5-.46.53l-3.46.45a.57.57 0 0 0-.49.56v10.22c.01.09.01.18.01.27c0 2.37-1.92 4.28-4.28 4.28c-2.46 0-4.43-2.06-4.27-4.55c.12-2.06 1.74-3.75 3.79-3.97c.66-.07 1.29.01 1.86.21v-10.01c0-.33.24-.6.56-.64"
							></path>
						</g>
					</svg>
					<p
							class="ml-[2vw] text-[#000] dark:text-[#e9e9e9] font-[800] text-[3.4vw]"
					>
						专区
					</p>
				</div>
				<div
						class="dark:border-[#2e2c35] flex w-[25vw] justify-center items-center border-[#E3E5EA]"
				>
					<svg
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							aria-hidden="true"
							role="img"
							width="5vw"
							height="5vw"
							viewBox="0 0 256 256"
							class="iconify iconify--ph mb-2.5"
							style="color: red"
					>
						<path
								fill="currentColor"
								d="M80 128V64a48 48 0 0 1 96 0v64a48 48 0 0 1-96 0m128 0a8 8 0 0 0-16 0a64 64 0 0 1-128 0a8 8 0 0 0-16 0a80.11 80.11 0 0 0 72 79.6V240a8 8 0 0 0 16 0v-32.4a80.11 80.11 0 0 0 72-79.6"
						></path>
					</svg>
					<p
							class="ml-[2vw] text-[#000] dark:text-[#e9e9e9] font-[800] text-[3.4vw]"
					>
						识曲
					</p>
				</div>
			</div>
			<div class="mt-[5vw]">
				<div class="flex justify-between px-[3vw]">
					<h1
							class="font-semibold text-[4vw] text-[#283349] dark:text-[#e9e9e9]"
					>
						猜你喜欢
					</h1>
					<svg
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							aria-hidden="true"
							role="img"
							width="5vw"
							height="5vw"
							viewBox="0 0 24 24"
							class="iconify iconify--ic mb-2.5"
							style="color: rgb(172, 175, 174)"
					>
						<path
								fill="currentColor"
								d="M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"
						></path>
					</svg>
				</div>
				<div class="flex px-[3vw] flex-wrap">
					<div
							class="p-[2vw] mr-[2vw] text-[3.5vw] dark:bg-[#31333a] dark:text-[#e9e9e9] text-[#535c6a] mt-[3vw] bg-[#fff] px-[3vw] rounded-[20px]"
					>
						在加纳共和国离婚
					</div>
					<div
							class="p-[2vw] mr-[2vw] text-[3.5vw] dark:bg-[#31333a] dark:text-[#e9e9e9] text-[#535c6a] mt-[3vw] bg-[#fff] px-[3vw] rounded-[20px]"
					>
						如果可以
					</div>
					<div
							class="p-[2vw] mr-[2vw] text-[3.5vw] dark:bg-[#31333a] dark:text-[#e9e9e9] text-[#535c6a] mt-[3vw] bg-[#fff] px-[3vw] rounded-[20px]"
					>
						彩虹布拉克
					</div>
					<div
							class="p-[2vw] mr-[2vw] text-[3.5vw] dark:bg-[#31333a] dark:text-[#e9e9e9] text-[#535c6a] mt-[3vw] bg-[#fff] px-[3vw] rounded-[20px]"
					>
						怎么了
					</div>
					<div
							class="p-[2vw] mr-[2vw] text-[3.5vw] dark:bg-[#31333a] dark:text-[#e9e9e9] text-[#535c6a] mt-[3vw] bg-[#fff] px-[3vw] rounded-[20px]"
					>
						天赐的声音
					</div>
				</div>
			</div>
			<div class="w-[100vw] overflow-hidden mt-[5vw]">
				<div class="rotationChart van-swipe">
					<div
							class="van-swipe__track"
							style="
              transition-duration: 0ms;
              transform: translateX(0px);
              width: 2405px;
            "
					>
						<div
								class="w-[61vw] bg-[#fff] dark:bg-[#31333a] rounded-[2vw] ml-[2.344vw] van-swipe-item"
								style="width: 240.5px"
						>
							<div
									class="dark:border-b-[#43454c] ml-[2vw] w-[54vw] h-[12.422vw] flex items-center border-b-[1px] border-b-[#eaeaea]"
							>
                <span
		                class="text-[4vw] text-[#2a344b] dark:text-[#fff] mr-[3.359vw] ml-[4vw]"
                >飙升榜</span
                >
								<div
										class="h-[5.235vw] bg-[#f3f4f1] dark:bg-[#393b42] flex items-center px-[2vw] rounded-[3vw]"
								>
									<svg
											xmlns="http://www.w3.org/2000/svg"
											xmlns:xlink="http://www.w3.org/1999/xlink"
											aria-hidden="true"
											role="img"
											width="1em"
											height="1em"
											viewBox="0 0 24 24"
											class="text-[#323c52] dark:text-[#fff] mr-[0.7vw] text-[2.6vw] iconify iconify--solar"
									>
										<path
												fill="currentColor"
												d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z"
										></path>
									</svg>
									<span class="text-[2.6vw] text-[#323c52] dark:text-[#fff]"
									>播放</span
									>
								</div>
							</div>
							<div class="pr-[2vw]">
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: red"
                  >1</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>工厂</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: red"
                  >2</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>春雪</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: red"
                  >3</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>人上人</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >4</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>找一个懂我的人去春游</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >5</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>爱你</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >6</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>怀抱</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >7</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>如果当时 (Live版)</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >8</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>迷失的人</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >9</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>5:20AM</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >10</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>Mother</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >11</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>霓虹夜港</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >12</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>梦里是空间</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >13</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>Better Go Home</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >14</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>下一次爱情来的时候</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >15</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>等风来</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >16</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>使一颗心免于哀伤</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >17</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>回家吧</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >18</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>Girls Never Die</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >19</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>这条小鱼在乎</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >20</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>song4love.</span
									>
								</div>
							</div>
						</div>
						<div
								class="w-[61vw] bg-[#fff] dark:bg-[#31333a] rounded-[2vw] ml-[2.344vw] van-swipe-item"
								style="width: 240.5px"
						>
							<div
									class="dark:border-b-[#43454c] ml-[2vw] w-[54vw] h-[12.422vw] flex items-center border-b-[1px] border-b-[#eaeaea]"
							>
                <span
		                class="text-[4vw] text-[#2a344b] dark:text-[#fff] mr-[3.359vw] ml-[4vw]"
                >新歌榜</span
                >
								<div
										class="h-[5.235vw] bg-[#f3f4f1] dark:bg-[#393b42] flex items-center px-[2vw] rounded-[3vw]"
								>
									<svg
											xmlns="http://www.w3.org/2000/svg"
											xmlns:xlink="http://www.w3.org/1999/xlink"
											aria-hidden="true"
											role="img"
											width="1em"
											height="1em"
											viewBox="0 0 24 24"
											class="text-[#323c52] dark:text-[#fff] mr-[0.7vw] text-[2.6vw] iconify iconify--solar"
									>
										<path
												fill="currentColor"
												d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z"
										></path>
									</svg>
									<span class="text-[2.6vw] text-[#323c52] dark:text-[#fff]"
									>播放</span
									>
								</div>
							</div>
							<div class="pr-[2vw]">
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: red"
                  >1</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>如果可以 (Live版)</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: red"
                  >2</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>命运 (Live版)</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: red"
                  >3</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>最后一页 (Live版)</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >4</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>工厂</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >5</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>OK了</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >6</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>人上人</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >7</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>这条小鱼在乎</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >8</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>若是月亮还没来-(小美呀)</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >9</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>如果可以</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >10</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>爱你</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >11</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>如果当时 (Live版)</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >12</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>我会好好的 (Live版)</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >13</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>阿普的思念</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >14</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>虚拟 (Live版)</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >15</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>因为爱情</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >16</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>Fortnight</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >17</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>逐客令</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >18</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>他不懂 (Live版)</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >19</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>5:20AM</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >20</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>后视镜</span
									>
								</div>
							</div>
						</div>
						<div
								class="w-[61vw] bg-[#fff] dark:bg-[#31333a] rounded-[2vw] ml-[2.344vw] van-swipe-item"
								style="width: 240.5px"
						>
							<div
									class="dark:border-b-[#43454c] ml-[2vw] w-[54vw] h-[12.422vw] flex items-center border-b-[1px] border-b-[#eaeaea]"
							>
                <span
		                class="text-[4vw] text-[#2a344b] dark:text-[#fff] mr-[3.359vw] ml-[4vw]"
                >原创榜</span
                >
								<div
										class="h-[5.235vw] bg-[#f3f4f1] dark:bg-[#393b42] flex items-center px-[2vw] rounded-[3vw]"
								>
									<svg
											xmlns="http://www.w3.org/2000/svg"
											xmlns:xlink="http://www.w3.org/1999/xlink"
											aria-hidden="true"
											role="img"
											width="1em"
											height="1em"
											viewBox="0 0 24 24"
											class="text-[#323c52] dark:text-[#fff] mr-[0.7vw] text-[2.6vw] iconify iconify--solar"
									>
										<path
												fill="currentColor"
												d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z"
										></path>
									</svg>
									<span class="text-[2.6vw] text-[#323c52] dark:text-[#fff]"
									>播放</span
									>
								</div>
							</div>
							<div class="pr-[2vw]">
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: red"
                  >1</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>人上人</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: red"
                  >2</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>逐客令</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: red"
                  >3</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>伯牙绝弦</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >4</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>冰封心</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >5</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>淘汰郎</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >6</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>diss what ?</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >7</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>胆小鬼</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >8</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>song4love.</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >9</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>粉雪</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >10</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>S.T.A.</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >11</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>Love Slowly（Prod.by CuD）</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >12</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>在这样适合说爱的夜晚</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >13</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>多余的角色</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >14</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>风趣</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >15</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>与众不同</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >16</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>感官失灵</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >17</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>通关攻略</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >18</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>亲密</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >19</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>沸點(feat. 王齐铭Watchme)</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >20</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>距离</span
									>
								</div>
							</div>
						</div>
						<div
								class="w-[61vw] bg-[#fff] dark:bg-[#31333a] rounded-[2vw] ml-[2.344vw] van-swipe-item"
								style="width: 240.5px"
						>
							<div
									class="dark:border-b-[#43454c] ml-[2vw] w-[54vw] h-[12.422vw] flex items-center border-b-[1px] border-b-[#eaeaea]"
							>
                <span
		                class="text-[4vw] text-[#2a344b] dark:text-[#fff] mr-[3.359vw] ml-[4vw]"
                >热歌榜</span
                >
								<div
										class="h-[5.235vw] bg-[#f3f4f1] dark:bg-[#393b42] flex items-center px-[2vw] rounded-[3vw]"
								>
									<svg
											xmlns="http://www.w3.org/2000/svg"
											xmlns:xlink="http://www.w3.org/1999/xlink"
											aria-hidden="true"
											role="img"
											width="1em"
											height="1em"
											viewBox="0 0 24 24"
											class="text-[#323c52] dark:text-[#fff] mr-[0.7vw] text-[2.6vw] iconify iconify--solar"
									>
										<path
												fill="currentColor"
												d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z"
										></path>
									</svg>
									<span class="text-[2.6vw] text-[#323c52] dark:text-[#fff]"
									>播放</span
									>
								</div>
							</div>
							<div class="pr-[2vw]">
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: red"
                  >1</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>如果爱忘了 (live)</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: red"
                  >2</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>还是会想你</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: red"
                  >3</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>5:20AM</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >4</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>如果可以 (Live版)</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >5</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>如果可以</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >6</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>紫荆花盛开</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >7</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>命运 (Live版)</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >8</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>无名的人</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >9</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>最后一页 (Live版)</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >10</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>若月亮没来 (若是月亮还没来)</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >11</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>工厂</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >12</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>下一次爱情来的时候</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >13</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>离别开出花</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >14</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>人上人</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >15</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>把回忆拼好给你</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >16</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>OK了</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >17</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>悬溺</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >18</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>我记得</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >19</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>根本你不懂得爱我</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >20</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>我想念</span
									>
								</div>
							</div>
						</div>
						<div
								class="w-[61vw] bg-[#fff] dark:bg-[#31333a] rounded-[2vw] ml-[2.344vw] van-swipe-item"
								style="width: 240.5px"
						>
							<div
									class="dark:border-b-[#43454c] ml-[2vw] w-[54vw] h-[12.422vw] flex items-center border-b-[1px] border-b-[#eaeaea]"
							>
                <span
		                class="text-[4vw] text-[#2a344b] dark:text-[#fff] mr-[3.359vw] ml-[4vw]"
                >云音乐说唱榜</span
                >
								<div
										class="h-[5.235vw] bg-[#f3f4f1] dark:bg-[#393b42] flex items-center px-[2vw] rounded-[3vw]"
								>
									<svg
											xmlns="http://www.w3.org/2000/svg"
											xmlns:xlink="http://www.w3.org/1999/xlink"
											aria-hidden="true"
											role="img"
											width="1em"
											height="1em"
											viewBox="0 0 24 24"
											class="text-[#323c52] dark:text-[#fff] mr-[0.7vw] text-[2.6vw] iconify iconify--solar"
									>
										<path
												fill="currentColor"
												d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z"
										></path>
									</svg>
									<span class="text-[2.6vw] text-[#323c52] dark:text-[#fff]"
									>播放</span
									>
								</div>
							</div>
							<div class="pr-[2vw]">
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: red"
                  >1</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>工厂</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: red"
                  >2</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>人上人</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: red"
                  >3</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>逐客令</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >4</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>阿普的思念</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >5</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>OK了</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >6</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>伯牙绝弦</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >7</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>罗马</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >8</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>枯木逢春</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >9</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>童年的罚跑</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >10</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>东京下雨夜</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >11</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>BRAZIL</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >12</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>谢天谢帝</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >13</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>新疆Cypher</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >14</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>成名作CYPHER</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >15</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>下蛋公鸡</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >16</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>How You Feel</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >17</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>末路狂花钱</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >18</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>Gohard freestyle (Live)</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >19</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>KASABLANKA</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >20</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>坏女孩</span
									>
								</div>
							</div>
						</div>
						<div
								class="w-[61vw] bg-[#fff] dark:bg-[#31333a] rounded-[2vw] ml-[2.344vw] van-swipe-item"
								style="width: 240.5px"
						>
							<div
									class="dark:border-b-[#43454c] ml-[2vw] w-[54vw] h-[12.422vw] flex items-center border-b-[1px] border-b-[#eaeaea]"
							>
                <span
		                class="text-[4vw] text-[#2a344b] dark:text-[#fff] mr-[3.359vw] ml-[4vw]"
                >云音乐古典榜</span
                >
								<div
										class="h-[5.235vw] bg-[#f3f4f1] dark:bg-[#393b42] flex items-center px-[2vw] rounded-[3vw]"
								>
									<svg
											xmlns="http://www.w3.org/2000/svg"
											xmlns:xlink="http://www.w3.org/1999/xlink"
											aria-hidden="true"
											role="img"
											width="1em"
											height="1em"
											viewBox="0 0 24 24"
											class="text-[#323c52] dark:text-[#fff] mr-[0.7vw] text-[2.6vw] iconify iconify--solar"
									>
										<path
												fill="currentColor"
												d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z"
										></path>
									</svg>
									<span class="text-[2.6vw] text-[#323c52] dark:text-[#fff]"
									>播放</span
									>
								</div>
							</div>
							<div class="pr-[2vw]">
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: red"
                  >1</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>French Movie Waltz (From Dancing On The Keys, Book 2)</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: red"
                  >2</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>莫扎特：G大调小夜曲</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: red"
                  >3</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>Nocturne No. 2 in E Flat Major, Op. 9, No. 2</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >4</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>Suite No. 7 in G Minor, HWV 432/6: VI. Passacaglia for
                    Piano</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >5</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>贝多芬: 《月光奏鸣曲》第一乐章, 作品27-2</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >6</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>肖邦: 夜曲</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >7</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>Nocturne No. 1 in B Flat Minor, Op. 9, No. 1</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >8</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>Cello Suite No. 1 in G Major, BWV 1007:I. Prélude</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >9</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>勃拉姆斯摇篮曲</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >10</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>Goldberg Variations, BWV 988:Aria</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >11</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>巴赫：十二平均律 C大调前奏曲 No.1</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >12</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>A小調圓舞曲〈遺作〉waltz In A Minor B.150 Op. Posth</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >13</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>小步舞曲（巴赫）</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >14</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>Sonata for 2 pianos in D, K.448:1. Allegro con
                    spirito</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >15</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>Concerto In F Minor for Violin, String Orchestra and
                    Continuo, Op. 8, No. 4, RV 297, "L'inverno" (Winter):Allegro
                    non molto</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >16</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>Sonata for 2 pianos in D, K.448:2. Andante</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >17</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>Lullaby (Wiegenlied, Op. 49, No. 4)</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >18</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>圣桑: 天鹅</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >19</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>Suite bergamasque, L.75 - 3. Clair de lune</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >20</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>莫扎特 钢琴曲k448 第一乐章（钢琴曲）</span
									>
								</div>
							</div>
						</div>
						<div
								class="w-[61vw] bg-[#fff] dark:bg-[#31333a] rounded-[2vw] ml-[2.344vw] van-swipe-item"
								style="width: 240.5px"
						>
							<div
									class="dark:border-b-[#43454c] ml-[2vw] w-[54vw] h-[12.422vw] flex items-center border-b-[1px] border-b-[#eaeaea]"
							>
                <span
		                class="text-[4vw] text-[#2a344b] dark:text-[#fff] mr-[3.359vw] ml-[4vw]"
                >云音乐电音榜</span
                >
								<div
										class="h-[5.235vw] bg-[#f3f4f1] dark:bg-[#393b42] flex items-center px-[2vw] rounded-[3vw]"
								>
									<svg
											xmlns="http://www.w3.org/2000/svg"
											xmlns:xlink="http://www.w3.org/1999/xlink"
											aria-hidden="true"
											role="img"
											width="1em"
											height="1em"
											viewBox="0 0 24 24"
											class="text-[#323c52] dark:text-[#fff] mr-[0.7vw] text-[2.6vw] iconify iconify--solar"
									>
										<path
												fill="currentColor"
												d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z"
										></path>
									</svg>
									<span class="text-[2.6vw] text-[#323c52] dark:text-[#fff]"
									>播放</span
									>
								</div>
							</div>
							<div class="pr-[2vw]">
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: red"
                  >1</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>Fast Cars &amp; Superstars (Radio)</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: red"
                  >2</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>窒 Suffocating</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: red"
                  >3</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>We Never</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >4</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>Arabian Adventure</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >5</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>New Agee(Deep Phonk)</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >6</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>this is what winter feels like</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >7</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>春雪</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >8</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>I'll Do It(PHONK)</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >9</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>The Sound of Silence (CYRIL Remix)</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >10</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>Heart On Fire</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >11</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>I'll Do It(必杀)</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >12</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>Sexy back (PHONK)</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >13</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>G LOVE(必杀)</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >14</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>MEET THE LOVELY BASTARDS</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >15</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>this is what slow dancing feels like</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >16</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>safe space (feat. RJ Pasin)</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >17</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>Movin</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >18</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>this is what winter feels like</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >19</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>Da Dumla Dumlada</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >20</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>Ill Do It x Metamorphosis (Mix)</span
									>
								</div>
							</div>
						</div>
						<div
								class="w-[61vw] bg-[#fff] dark:bg-[#31333a] rounded-[2vw] ml-[2.344vw] van-swipe-item"
								style="width: 240.5px"
						>
							<div
									class="dark:border-b-[#43454c] ml-[2vw] w-[54vw] h-[12.422vw] flex items-center border-b-[1px] border-b-[#eaeaea]"
							>
                <span
		                class="text-[4vw] text-[#2a344b] dark:text-[#fff] mr-[3.359vw] ml-[4vw]"
                >黑胶VIP爱听榜</span
                >
								<div
										class="h-[5.235vw] bg-[#f3f4f1] dark:bg-[#393b42] flex items-center px-[2vw] rounded-[3vw]"
								>
									<svg
											xmlns="http://www.w3.org/2000/svg"
											xmlns:xlink="http://www.w3.org/1999/xlink"
											aria-hidden="true"
											role="img"
											width="1em"
											height="1em"
											viewBox="0 0 24 24"
											class="text-[#323c52] dark:text-[#fff] mr-[0.7vw] text-[2.6vw] iconify iconify--solar"
									>
										<path
												fill="currentColor"
												d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z"
										></path>
									</svg>
									<span class="text-[2.6vw] text-[#323c52] dark:text-[#fff]"
									>播放</span
									>
								</div>
							</div>
							<div class="pr-[2vw]">
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: red"
                  >1</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>如果可以</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: red"
                  >2</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>无名的人</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: red"
                  >3</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>根本你不懂得爱我</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >4</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>若月亮没来 (若是月亮还没来)</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >5</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>下一次爱情来的时候</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >6</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>我想念</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >7</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>指纹</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >8</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>奢香夫人</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >9</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>瞬</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >10</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>一程山路</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >11</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>落 (花开花落日升日没)</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >12</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>妥协</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >13</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>特别的人</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >14</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>可不可以</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >15</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>命运</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >16</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>多远都要在一起</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >17</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>天外来物</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >18</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>最后一页</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >19</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>想你时风起</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >20</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>出现又离开 (Live)</span
									>
								</div>
							</div>
						</div>
						<div
								class="w-[61vw] bg-[#fff] dark:bg-[#31333a] rounded-[2vw] ml-[2.344vw] van-swipe-item"
								style="width: 240.5px"
						>
							<div
									class="dark:border-b-[#43454c] ml-[2vw] w-[54vw] h-[12.422vw] flex items-center border-b-[1px] border-b-[#eaeaea]"
							>

                <span
		                class="text-[4vw] text-[#2a344b] dark:text-[#fff] mr-[3.359vw] ml-[4vw]"
                >云音乐ACG榜</span
                >
								<div
										class="h-[5.235vw] bg-[#f3f4f1] dark:bg-[#393b42] flex items-center px-[2vw] rounded-[3vw]"
								>
									<svg
											xmlns="http://www.w3.org/2000/svg"
											xmlns:xlink="http://www.w3.org/1999/xlink"
											aria-hidden="true"
											role="img"
											width="1em"
											height="1em"
											viewBox="0 0 24 24"
											class="text-[#323c52] dark:text-[#fff] mr-[0.7vw] text-[2.6vw] iconify iconify--solar"
									>
										<path
												fill="currentColor"
												d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z"
										></path>
									</svg>
									<span class="text-[2.6vw] text-[#323c52] dark:text-[#fff]"
									>播放</span
									>
								</div>
							</div>
							<div class="pr-[2vw]">
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: red"
                  >1</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>不眠之夜</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: red"
                  >2</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>使一颗心免于哀伤</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: red"
                  >3</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>Bling-Bang-Bang-Born</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >4</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>雑踏、僕らの街</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >5</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>晴る</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >6</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>千里饿殍行</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >7</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>烬火 Emberfire</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >8</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>光の跡（Why)</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >9</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>使一颗心免于哀伤</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >10</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>Poison (Hazbin Hotel Original Soundtrack)</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >11</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>DARK ARIA</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >12</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>次回予告</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >13</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>絶対零度</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >14</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>月の温度</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >15</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>LEveL</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >16</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>正解はいらない</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >17</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>渋谷アクアリウム</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >18</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>首のない天使</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >19</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>在出发之前</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >20</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>Sleep Walking Orchestra</span
									>
								</div>
							</div>
						</div>
						<div
								class="w-[61vw] bg-[#fff] dark:bg-[#31333a] rounded-[2vw] ml-[2.344vw] van-swipe-item"
								style="width: 240.5px"
						>
							<div
									class="dark:border-b-[#43454c] ml-[2vw] w-[54vw] h-[12.422vw] flex items-center border-b-[1px] border-b-[#eaeaea]"
							>
                <span
		                class="text-[4vw] text-[#2a344b] dark:text-[#fff] mr-[3.359vw] ml-[4vw]"
                >云音乐韩语榜</span
                >
								<div
										class="h-[5.235vw] bg-[#f3f4f1] dark:bg-[#393b42] flex items-center px-[2vw] rounded-[3vw]"
								>
									<svg
											xmlns="http://www.w3.org/2000/svg"
											xmlns:xlink="http://www.w3.org/1999/xlink"
											aria-hidden="true"
											role="img"
											width="1em"
											height="1em"
											viewBox="0 0 24 24"
											class="text-[#323c52] dark:text-[#fff] mr-[0.7vw] text-[2.6vw] iconify iconify--solar"
									>
										<path
												fill="currentColor"
												d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z"
										></path>
									</svg>
									<span class="text-[2.6vw] text-[#323c52] dark:text-[#fff]"
									>播放</span
									>
								</div>
							</div>
							<div class="pr-[2vw]">
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: red"
                  >1</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>나는 아픈 건 딱 질색이니까</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: red"
                  >2</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>SHEESH</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: red"
                  >3</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>Diamond</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >4</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>잘자요 아가씨 (Prod. 과나)</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >5</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>LIKE THAT</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >6</span>
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>Feeling Lucky</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >7</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>To. X</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >8</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>SPOT!</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >9</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>Drama</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >10</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>TRUE</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >11</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>BATTER UP</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >12</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>꿈결같아서 (Like A Dream)</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >13</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>ONE SPARK</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >14</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>Easy</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >15</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>Super Lady</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >16</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>Waiting Game</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >17</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>봄눈（TV Version）</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >18</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>Love 119</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >19</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>SHEESH</span
									>
								</div>
								<div class="my-[2.7vw] flex items-center h-[8vw]">
                  <span
		                  class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
		                  style="color: rgb(133, 131, 147)"
                  >20</span
                  >
									<span
											class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate"
									>Wish U</span
									>
								</div>
							</div>
						</div>
					</div>
					<div class="van-swipe__indicators">
						<i class="van-swipe__indicator van-swipe__indicator--active"></i
						><i class="van-swipe__indicator"></i
					><i class="van-swipe__indicator"></i
					><i class="van-swipe__indicator"></i
					><i class="van-swipe__indicator"></i
					><i class="van-swipe__indicator"></i
					><i class="van-swipe__indicator"></i
					><i class="van-swipe__indicator"></i
					><i class="van-swipe__indicator"></i
					><i class="van-swipe__indicator"></i>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>

</script>
<style>

</style>