<template>
		<div
				class="w-[100vw] h-[20vw] p-[3vw] pl-[1vw] flex justify-between items-center"
		>
			<van-icon name="wap-nav" @click="showDrawer" />
			<a-drawer
					v-model:open="open"
					width="315"
					:closable="false"
					:footer-style="{ textAlign: 'left' }"
					placement="left"
			>
				<div
						data-v-7bfda910=""
						class="dark:bg-[#272727] bg-[#fff] fixed z-[11]"
						style="height: 100vh; left: 0px; top: 0px"
				>
					<div data-v-7bfda910="">
						<div
								class="dark:bg-[#151515] flex justify-between items-center h-[16vw] px-[5vw] w-[84vw] bg-[#f1f1f1]"
						>
							<div class="flex items-center justify-between">
								<div class="flex items-center">
									<div
											class="w-[7vw] h-[7vw] rounded-[50%] mr-[2vw] bg-[#f4f4f1] flex items-center justify-center overflow-hidden"
									>
										<svg
												xmlns="http://www.w3.org/2000/svg"
												xmlns:xlink="http://www.w3.org/1999/xlink"
												aria-hidden="true"
												role="img"
												width="1em"
												height="1em"
												viewBox="0 0 24 24"
												class="text-[#f9dada] w-[7vw] h-[7vw] iconify iconify--gridicons"
										>
											<path
													fill="currentColor"
													d="M12 4a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 16s8 0 8-2c0-2.4-3.9-5-8-5s-8 2.6-8 5c0 2 8 2 8 2"
											></path>
										</svg>
									</div>
									<span class="dark:text-[#f0f0f0] text-[#383838] text-[3.5vw]"
									>立刻登录</span
									>
									<svg
											xmlns="http://www.w3.org/2000/svg"
											xmlns:xlink="http://www.w3.org/1999/xlink"
											aria-hidden="true"
											role="img"
											width="1em"
											height="1em"
											viewBox="0 0 24 24"
											class="dark:text-[#f0f0f0] text-[#383838] text-[4vw] iconify iconify--mingcute"
									>
										<g fill="none" fill-rule="evenodd">
											<path
													d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
											></path>
											<path
													fill="currentColor"
													d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
											></path>
										</g>
									</svg>
								</div>
							</div>
							<svg
									xmlns="http://www.w3.org/2000/svg"
									xmlns:xlink="http://www.w3.org/1999/xlink"
									aria-hidden="true"
									role="img"
									width="1em"
									height="1em"
									viewBox="0 0 15 15"
									class="dark:text-[#f0f0f0] text-[#383838] text-[5vw] iconify iconify--teenyicons"
							>
								<path
										fill="none"
										stroke="currentColor"
										d="M.5 5V2.5a2 2 0 0 1 2-2H5m5 0h2.5a2 2 0 0 1 2 2V5m-14 5v2.5a2 2 0 0 0 2 2H5m9.5-4.5v2.5a2 2 0 0 1-2 2H10m-8-7h11"
								></path>
							</svg>
						</div>
					</div>
					<div data-v-7bfda910="">
						<div
								class="dark:bg-[#151515] bg-[#f1f1f1] h-[95vh] scroll-wrapper overflow-hidden"
						>
							<div class="scroll-content h-[420vw]">
								<div
										class="mx-auto w-[76vw] h-[27.66vw] bg-gradient-to-r from-[#3b3b3b] to-[#5f5050] px-[3.96vw] text-[#9e8f8f] rounded-[20px]"
								>
									<div class="h-[10vw] flex justify-between items-center">
										<h1 class="text-[3.6vw] text-[#ffeeeb]">开通黑胶VIP</h1>
										<div
												class="w-[15.78vw] h-[6.56vw] leading-[6vw] text-center rounded-[100px] border-[1px] border-[#9e8f8f] text-[2.5vw] mt-[3vw]"
										>
											会员中心
										</div>
									</div>
									<div class="h-[7vw] border-b-[1px] border-[#494443]">
										<p class="text-[2.73vw]">点击恢复超21项专属特权</p>
									</div>
									<div
											class="h-[11vw] leading-[11vw] flex justify-between items-center mr-[4.45vw]"
									>
										<div class="text-[2.5vw] h-[11vw]">
											受邀专享，黑胶VIP低至0.27元/天!
										</div>
										<div class="scale-50 w-[8vw]">
											<div
													class="w-[22vw] h-[22vw] rounded-[10px] bg-[#e54701] text-[#fff] pl-[3vw] text-[8vw] scale-50"
											>
												受邀专享
											</div>
										</div>
									</div>
								</div>
								<div
										class="dark:bg-[#2c2c2c] rounded-[15px] bg-[#fff] w-[76vw] mx-auto mt-[4vw]"
								>
									<!---->
									<div class="px-[4vw]">
										<div
												class="flex items-center justify-between h-[12vw] px-[3.6vw]"
										>
											<div class="flex items-center">
												<svg
														xmlns="http://www.w3.org/2000/svg"
														xmlns:xlink="http://www.w3.org/1999/xlink"
														aria-hidden="true"
														role="img"
														width="1em"
														height="1em"
														viewBox="0 0 24 24"
														class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--solar"
												>
													<g fill="none" stroke="currentColor" stroke-width="1.5">
														<path
																d="M2 12c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172C22 6.343 22 8.229 22 12c0 3.771 0 5.657-1.172 6.828C19.657 20 17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172C2 17.657 2 15.771 2 12Z"
														></path>
														<path
																stroke-linecap="round"
																d="m6 8l2.159 1.8c1.837 1.53 2.755 2.295 3.841 2.295c1.086 0 2.005-.765 3.841-2.296L18 8"
														></path>
													</g>
												</svg>
												<span
														class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
												>我的消息</span
												>
											</div>
											<div class="flex items-center">
												<!---->
												<svg
														xmlns="http://www.w3.org/2000/svg"
														xmlns:xlink="http://www.w3.org/1999/xlink"
														aria-hidden="true"
														role="img"
														width="1em"
														height="1em"
														viewBox="0 0 24 24"
														class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
														style="color: rgb(181, 181, 181)"
												>
													<g fill="none" fill-rule="evenodd">
														<path
																d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
														></path>
														<path
																fill="currentColor"
																d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
														></path>
													</g>
												</svg>
												<!---->
											</div>
										</div>
										<div
												class="flex items-center justify-between h-[12vw] px-[3.6vw]"
										>
											<div class="flex items-center">
												<svg
														xmlns="http://www.w3.org/2000/svg"
														xmlns:xlink="http://www.w3.org/1999/xlink"
														aria-hidden="true"
														role="img"
														width="1em"
														height="1em"
														viewBox="0 0 32 32"
														class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--cib"
												>
													<path
															fill="currentColor"
															d="M16 1.151c-8.88 0-16 7.182-16 16.156c0 1.328.052 1.833.328 3.104l4.88 3.615l.76 6.021h8.135l.438.302c.5.349.938.5 1.443.5c.469 0 .974-.135 1.365-.417l.521-.385h8.125l.75-6.021l4.927-3.615c.276-1.271.328-1.776.328-3.104c0-8.969-7.12-16.156-16-16.156m1.328 3.01c1.198 0 2.37.297 3.349.865l-3.286 16.729l4.563-16.078c1.411.479 2.479 1.25 3.344 2.417l.031.047l-6.536 14.151L26.22 9.344l.047.036c1.01.943 1.661 2.089 1.99 3.531l-8.26 10.224l8.583-8.667l.01.026c.339.75.557 1.813.557 2.661c0 .677-.031.948-.219 1.667l-4.74 3.469l-.62 4.948h-5.969l-.688.526c-.266.208-.646.354-.911.354s-.646-.146-.911-.354l-.688-.526H8.427l-.589-4.813l-4.839-3.557a6.634 6.634 0 0 1-.214-1.677c0-.964.214-1.99.568-2.74l.016-.031l8.604 8.734l-8.307-10.328c.333-1.417 1.167-2.786 2.188-3.62l7.391 13.036L6.641 8.134c.74-1.089 1.932-1.943 3.391-2.438L14.6 21.79L11.142 5.087l.073-.042c1.083-.599 2.13-.875 3.276-.875c.26 0 .38.005.703.042l.781 17.401l.615-17.417c.297-.031.411-.036.74-.036z"
													></path>
												</svg>
												<span
														class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
												>云贝中心</span
												>
											</div>
											<div class="flex items-center">
												<span class="text-[color:#a7a7a7] text-[3vw]">签到</span>
												<svg
														xmlns="http://www.w3.org/2000/svg"
														xmlns:xlink="http://www.w3.org/1999/xlink"
														aria-hidden="true"
														role="img"
														width="1em"
														height="1em"
														viewBox="0 0 24 24"
														class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
														style="color: rgb(181, 181, 181)"
												>
													<g fill="none" fill-rule="evenodd">
														<path
																d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
														></path>
														<path
																fill="currentColor"
																d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
														></path>
													</g>
												</svg>
												<!---->
											</div>
										</div>
										<div
												class="flex items-center justify-between h-[12vw] px-[3.6vw]"
										>
											<div class="flex items-center">
												<svg
														xmlns="http://www.w3.org/2000/svg"
														xmlns:xlink="http://www.w3.org/1999/xlink"
														aria-hidden="true"
														role="img"
														width="1em"
														height="1em"
														viewBox="0 0 24 24"
														class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--mingcute"
												>
													<g fill="none" fill-rule="evenodd">
														<path
																d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
														></path>
														<path
																fill="currentColor"
																d="M12 19a1 1 0 0 1 .993.883L13 20v1a1 1 0 0 1-1.993.117L11 21v-1a1 1 0 0 1 1-1m-4.95-2.05a1 1 0 0 1 0 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0m11.314 0l.707.707a1 1 0 0 1-1.414 1.414l-.707-.707a1 1 0 0 1 1.414-1.414M12.617 2a2 2 0 0 1 1.985 1.752l.38 3.04a6 6 0 1 1-5.964 0l.38-3.04A2 2 0 0 1 11.383 2zM12 8a4 4 0 1 0 0 8a4 4 0 0 0 0-8m-8 3a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zm17 0a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2zm-1.929-6.07a1 1 0 0 1 0 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0m-12.728 0l.707.707A1 1 0 0 1 5.636 7.05l-.707-.707A1 1 0 0 1 6.343 4.93M12.617 4h-1.234l-.25 2h1.734z"
														></path>
													</g>
												</svg>
												<span
														class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
												>创作者中心</span
												>
											</div>
											<div class="flex items-center">
												<!---->
												<svg
														xmlns="http://www.w3.org/2000/svg"
														xmlns:xlink="http://www.w3.org/1999/xlink"
														aria-hidden="true"
														role="img"
														width="1em"
														height="1em"
														viewBox="0 0 24 24"
														class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
														style="color: rgb(181, 181, 181)"
												>
													<g fill="none" fill-rule="evenodd">
														<path
																d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
														></path>
														<path
																fill="currentColor"
																d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
														></path>
													</g>
												</svg>
												<!---->
											</div>
										</div>
									</div>
								</div>
								<div
										class="dark:bg-[#2c2c2c] rounded-[15px] bg-[#fff] w-[76vw] mx-auto mt-[4vw]"
								>
									<div
											class="dark:border-b-[#333] text-[#969696] text-[3vw] px-[4vw] py-[3vw] border-b-[0.35vw] border-b-[#E8e8e8]"
									>
										音乐服务
									</div>
									<div class="px-[4vw]">
										<div
												class="flex items-center justify-between h-[12vw] px-[3.6vw]"
										>
											<div class="flex items-center">
												<svg
														xmlns="http://www.w3.org/2000/svg"
														xmlns:xlink="http://www.w3.org/1999/xlink"
														aria-hidden="true"
														role="img"
														width="1em"
														height="1em"
														viewBox="0 0 256 256"
														class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--ph"
												>
													<path
															fill="currentColor"
															d="m198.91 128l30.3-53a6 6 0 0 0-5.21-9h-60.51l-30.28-53a6 6 0 0 0-10.42 0L92.5 66H32a6 6 0 0 0-5.21 9l30.28 53l-30.28 53a6 6 0 0 0 5.21 9h60.5l30.29 53a6 6 0 0 0 10.42 0l30.28-53H224a6 6 0 0 0 5.21-9Zm14.75-50L192 115.91L170.34 78Zm-28.57 50l-28.56 50H99.46L70.9 128l28.56-50h57.07ZM128 28.09L149.67 66h-43.35ZM42.34 78h43.3L64 115.91Zm0 99.92L64 140.09L85.64 178ZM128 227.91L106.32 190h43.35ZM170.34 178L192 140.09L213.66 178Z"
													></path>
												</svg>
												<span
														class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
												>趣测</span
												>
											</div>
											<div class="flex items-center">
                  <span class="text-[color:#a7a7a7] text-[3vw]"
                  >点击查看今日运势</span
                  >
												<svg
														xmlns="http://www.w3.org/2000/svg"
														xmlns:xlink="http://www.w3.org/1999/xlink"
														aria-hidden="true"
														role="img"
														width="1em"
														height="1em"
														viewBox="0 0 24 24"
														class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
														style="color: rgb(181, 181, 181)"
												>
													<g fill="none" fill-rule="evenodd">
														<path
																d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
														></path>
														<path
																fill="currentColor"
																d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
														></path>
													</g>
												</svg>
												<!---->
											</div>
										</div>
										<div
												class="flex items-center justify-between h-[12vw] px-[3.6vw]"
										>
											<div class="flex items-center">
												<svg
														xmlns="http://www.w3.org/2000/svg"
														xmlns:xlink="http://www.w3.org/1999/xlink"
														aria-hidden="true"
														role="img"
														width="1em"
														height="1em"
														viewBox="0 0 512 512"
														class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--ion"
												>
													<path
															fill="none"
															stroke="currentColor"
															stroke-miterlimit="10"
															stroke-width="32"
															d="M366.05 146a46.7 46.7 0 0 1-2.42-63.42a3.87 3.87 0 0 0-.22-5.26l-44.13-44.18a3.89 3.89 0 0 0-5.5 0l-70.34 70.34a23.6 23.6 0 0 0-5.71 9.24a23.66 23.66 0 0 1-14.95 15a23.7 23.7 0 0 0-9.25 5.71L33.14 313.78a3.89 3.89 0 0 0 0 5.5l44.13 44.13a3.87 3.87 0 0 0 5.26.22a46.69 46.69 0 0 1 65.84 65.84a3.87 3.87 0 0 0 .22 5.26l44.13 44.13a3.89 3.89 0 0 0 5.5 0l180.4-180.39a23.7 23.7 0 0 0 5.71-9.25a23.66 23.66 0 0 1 14.95-15a23.6 23.6 0 0 0 9.24-5.71l70.34-70.34a3.89 3.89 0 0 0 0-5.5l-44.13-44.13a3.87 3.87 0 0 0-5.26-.22a46.7 46.7 0 0 1-63.42-2.32Z"
													></path>
													<path
															fill="none"
															stroke="currentColor"
															stroke-linecap="round"
															stroke-miterlimit="10"
															stroke-width="32"
															d="m250.5 140.44l-16.51-16.51m60.53 60.53l-11.01-11m55.03 55.03l-11-11.01m60.53 60.53l-16.51-16.51"
													></path>
												</svg>
												<span
														class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
												>云村有票</span
												>
											</div>
											<div class="flex items-center">
												<!---->
												<svg
														xmlns="http://www.w3.org/2000/svg"
														xmlns:xlink="http://www.w3.org/1999/xlink"
														aria-hidden="true"
														role="img"
														width="1em"
														height="1em"
														viewBox="0 0 24 24"
														class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
														style="color: rgb(181, 181, 181)"
												>
													<g fill="none" fill-rule="evenodd">
														<path
																d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
														></path>
														<path
																fill="currentColor"
																d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
														></path>
													</g>
												</svg>
												<!---->
											</div>
										</div>
										<div
												class="flex items-center justify-between h-[12vw] px-[3.6vw]"
										>
											<div class="flex items-center">
												<svg
														xmlns="http://www.w3.org/2000/svg"
														xmlns:xlink="http://www.w3.org/1999/xlink"
														aria-hidden="true"
														role="img"
														width="1em"
														height="1em"
														viewBox="0 0 24 24"
														class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--mdi"
												>
													<path
															fill="currentColor"
															d="M11 18h2v-2h-2zm1-12c-2.2 0-4 1.8-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.8-3 5h2c0-2.2 3-2.5 3-5c0-2.2-1.8-4-4-4m7-1v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"
													></path>
												</svg>
												<span
														class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
												>多多西西口袋</span
												>
											</div>
											<div class="flex items-center">
												<!---->
												<svg
														xmlns="http://www.w3.org/2000/svg"
														xmlns:xlink="http://www.w3.org/1999/xlink"
														aria-hidden="true"
														role="img"
														width="1em"
														height="1em"
														viewBox="0 0 24 24"
														class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
														style="color: rgb(181, 181, 181)"
												>
													<g fill="none" fill-rule="evenodd">
														<path
																d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
														></path>
														<path
																fill="currentColor"
																d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
														></path>
													</g>
												</svg>
												<!---->
											</div>
										</div>
										<div
												class="flex items-center justify-between h-[12vw] px-[3.6vw]"
										>
											<div class="flex items-center">
												<svg
														xmlns="http://www.w3.org/2000/svg"
														xmlns:xlink="http://www.w3.org/1999/xlink"
														aria-hidden="true"
														role="img"
														width="1em"
														height="1em"
														viewBox="0 0 1024 1024"
														class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--ep"
												>
													<path
															fill="currentColor"
															d="M887.01 264.99c-6-5.99-13.67-8.99-23.01-8.99H704c-1.34-54.68-20.01-100.01-56-136s-81.32-54.66-136-56c-54.68 1.34-100.01 20.01-136 56s-54.66 81.32-56 136H160c-9.35 0-17.02 3-23.01 8.99c-5.99 6-8.99 13.67-8.99 23.01v640c0 9.35 2.99 17.02 8.99 23.01S150.66 960 160 960h704c9.35 0 17.02-2.99 23.01-8.99S896 937.34 896 928V288c0-9.35-2.99-17.02-8.99-23.01M421.5 165.5c24.32-24.34 54.49-36.84 90.5-37.5c35.99.68 66.16 13.18 90.5 37.5s36.84 54.49 37.5 90.5H384c.68-35.99 13.18-66.16 37.5-90.5M832 896H192V320h128v128h64V320h256v128h64V320h128z"
													></path>
												</svg>
												<span
														class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
												>商城</span
												>
											</div>
											<div class="flex items-center">
												<!---->
												<svg
														xmlns="http://www.w3.org/2000/svg"
														xmlns:xlink="http://www.w3.org/1999/xlink"
														aria-hidden="true"
														role="img"
														width="1em"
														height="1em"
														viewBox="0 0 24 24"
														class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
														style="color: rgb(181, 181, 181)"
												>
													<g fill="none" fill-rule="evenodd">
														<path
																d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
														></path>
														<path
																fill="currentColor"
																d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
														></path>
													</g>
												</svg>
												<!---->
											</div>
										</div>
										<div
												class="flex items-center justify-between h-[12vw] px-[3.6vw]"
										>
											<div class="flex items-center">
												<svg
														xmlns="http://www.w3.org/2000/svg"
														xmlns:xlink="http://www.w3.org/1999/xlink"
														aria-hidden="true"
														role="img"
														width="1em"
														height="1em"
														viewBox="0 0 14 14"
														class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--streamline"
												>
													<g
															fill="none"
															stroke="currentColor"
															stroke-linecap="round"
															stroke-linejoin="round"
													>
														<rect width="13" height="13" x=".5" y=".5" rx="3"></rect>
														<path d="M2.5 7.02h2L6 4.51l1.5 5.5l2-2.99h2"></path>
													</g>
												</svg>
												<span
														class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
												>Beat专区</span
												>
											</div>
											<div class="flex items-center">
                  <span class="text-[color:#a7a7a7] text-[3vw]"
                  >顶尖制作邀你创作</span
                  >
												<svg
														xmlns="http://www.w3.org/2000/svg"
														xmlns:xlink="http://www.w3.org/1999/xlink"
														aria-hidden="true"
														role="img"
														width="1em"
														height="1em"
														viewBox="0 0 24 24"
														class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
														style="color: rgb(181, 181, 181)"
												>
													<g fill="none" fill-rule="evenodd">
														<path
																d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
														></path>
														<path
																fill="currentColor"
																d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
														></path>
													</g>
												</svg>
												<!---->
											</div>
										</div>
										<div
												class="flex items-center justify-between h-[12vw] px-[3.6vw]"
										>
											<div class="flex items-center">
												<svg
														xmlns="http://www.w3.org/2000/svg"
														xmlns:xlink="http://www.w3.org/1999/xlink"
														aria-hidden="true"
														role="img"
														width="1em"
														height="1em"
														viewBox="0 0 24 24"
														class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--tabler"
												>
													<g
															fill="none"
															stroke="currentColor"
															stroke-linecap="round"
															stroke-linejoin="round"
															stroke-width="2"
													>
														<path
																d="M19.364 4.636a2 2 0 0 1 0 2.828a7 7 0 0 1-1.414 7.072l-2.122 2.12a4 4 0 0 0-.707 3.536L3.808 8.88a4 4 0 0 0 3.535-.707L9.464 6.05a7 7 0 0 1 7.072-1.414a2 2 0 0 1 2.828 0"
														></path>
														<path
																d="m7.343 12.414l-.707.707a3 3 0 0 0 4.243 4.243l.707-.707"
														></path>
													</g>
												</svg>
												<span
														class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
												>口袋彩铃</span
												>
											</div>
											<div class="flex items-center">
												<!---->
												<svg
														xmlns="http://www.w3.org/2000/svg"
														xmlns:xlink="http://www.w3.org/1999/xlink"
														aria-hidden="true"
														role="img"
														width="1em"
														height="1em"
														viewBox="0 0 24 24"
														class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
														style="color: rgb(181, 181, 181)"
												>
													<g fill="none" fill-rule="evenodd">
														<path
																d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
														></path>
														<path
																fill="currentColor"
																d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
														></path>
													</g>
												</svg>
												<!---->
											</div>
										</div>
										<div
												class="flex items-center justify-between h-[12vw] px-[3.6vw]"
										>
											<div class="flex items-center">
												<svg
														xmlns="http://www.w3.org/2000/svg"
														xmlns:xlink="http://www.w3.org/1999/xlink"
														aria-hidden="true"
														role="img"
														width="1em"
														height="1em"
														viewBox="0 0 48 48"
														class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--icon-park-outline"
												>
													<g fill="none">
														<rect
																width="40"
																height="28"
																x="4"
																y="13"
																stroke="currentColor"
																stroke-linejoin="round"
																stroke-width="4"
																rx="14"
														></rect>
														<circle
																cx="31"
																cy="22"
																r="2"
																fill="currentColor"
														></circle>
														<circle
																cx="35"
																cy="27"
																r="2"
																fill="currentColor"
														></circle>
														<path
																stroke="currentColor"
																stroke-linecap="round"
																stroke-linejoin="round"
																stroke-width="4"
																d="M12 27h10m-10 0h10m2-20v6m0-6v6m-7 9v10"
														></path>
													</g>
												</svg>
												<span
														class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
												>游戏专区</span
												>
											</div>
											<div class="flex items-center">
                  <span class="text-[color:#a7a7a7] text-[3vw]"
                  >音乐浇灌治愈花园</span
                  >
												<svg
														xmlns="http://www.w3.org/2000/svg"
														xmlns:xlink="http://www.w3.org/1999/xlink"
														aria-hidden="true"
														role="img"
														width="1em"
														height="1em"
														viewBox="0 0 24 24"
														class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
														style="color: rgb(181, 181, 181)"
												>
													<g fill="none" fill-rule="evenodd">
														<path
																d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
														></path>
														<path
																fill="currentColor"
																d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
														></path>
													</g>
												</svg>
												<!---->
											</div>
										</div>
									</div>
								</div>
								<div
										class="dark:bg-[#2c2c2c] rounded-[15px] bg-[#fff] w-[76vw] mx-auto mt-[4vw]"
								>
									<div
											class="dark:border-b-[#333] text-[#969696] text-[3vw] px-[4vw] py-[3vw] border-b-[0.35vw] border-b-[#E8e8e8]"
									>
										其他
									</div>
									<div class="px-[4vw]">
										<div
												class="flex items-center justify-between h-[12vw] px-[3.6vw]"
										>
											<div class="flex items-center">
												<svg
														xmlns="http://www.w3.org/2000/svg"
														xmlns:xlink="http://www.w3.org/1999/xlink"
														aria-hidden="true"
														role="img"
														width="1em"
														height="1em"
														viewBox="0 0 24 24"
														class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--ri"
												>
													<path
															fill="currentColor"
															d="m12 1l9.5 5.5v11L12 23l-9.5-5.5v-11zm0 2.311L4.5 7.653v8.694l7.5 4.342l7.5-4.342V7.653zM12 16a4 4 0 1 1 0-8a4 4 0 0 1 0 8m0-2a2 2 0 1 0 0-4a2 2 0 0 0 0 4"
													></path>
												</svg>
												<span
														class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
												>设置</span
												>
											</div>
											<div class="flex items-center">
												<!---->
												<svg
														xmlns="http://www.w3.org/2000/svg"
														xmlns:xlink="http://www.w3.org/1999/xlink"
														aria-hidden="true"
														role="img"
														width="1em"
														height="1em"
														viewBox="0 0 24 24"
														class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
														style="color: rgb(181, 181, 181)"
												>
													<g fill="none" fill-rule="evenodd">
														<path
																d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
														></path>
														<path
																fill="currentColor"
																d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
														></path>
													</g>
												</svg>
												<!---->
											</div>
										</div>
										<div
												class="flex items-center justify-between h-[12vw] px-[3.6vw]"
										>
											<div class="flex items-center">
												<svg
														xmlns="http://www.w3.org/2000/svg"
														xmlns:xlink="http://www.w3.org/1999/xlink"
														aria-hidden="true"
														role="img"
														width="1em"
														height="1em"
														viewBox="0 0 24 24"
														class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--line-md"
												>
													<g fill="currentColor" fill-opacity="0">
														<path
																d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z"
														>
															<animate
																	id="iconifyVue2"
																	fill="freeze"
																	attributeName="fill-opacity"
																	begin="0.7s;iconifyVue2.begin+6s"
																	dur="0.4s"
																	values="0;1"
															></animate>
															<animate
																	fill="freeze"
																	attributeName="fill-opacity"
																	begin="iconifyVue2.begin+2.2s"
																	dur="0.4s"
																	values="1;0"
															></animate>
														</path>
														<path
																d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z"
														>
															<animate
																	fill="freeze"
																	attributeName="fill-opacity"
																	begin="iconifyVue2.begin+3s"
																	dur="0.4s"
																	values="0;1"
															></animate>
															<animate
																	fill="freeze"
																	attributeName="fill-opacity"
																	begin="iconifyVue2.begin+5.2s"
																	dur="0.4s"
																	values="1;0"
															></animate>
														</path>
														<path
																d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z"
														>
															<animate
																	fill="freeze"
																	attributeName="fill-opacity"
																	begin="iconifyVue2.begin+0.4s"
																	dur="0.4s"
																	values="0;1"
															></animate>
															<animate
																	fill="freeze"
																	attributeName="fill-opacity"
																	begin="iconifyVue2.begin+2.8s"
																	dur="0.4s"
																	values="1;0"
															></animate>
														</path>
														<path
																d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z"
														>
															<animate
																	fill="freeze"
																	attributeName="fill-opacity"
																	begin="iconifyVue2.begin+3.4s"
																	dur="0.4s"
																	values="0;1"
															></animate>
															<animate
																	fill="freeze"
																	attributeName="fill-opacity"
																	begin="iconifyVue2.begin+5.6s"
																	dur="0.4s"
																	values="1;0"
															></animate>
														</path>
													</g>
													<path
															fill="none"
															stroke="currentColor"
															stroke-dasharray="56"
															stroke-dashoffset="56"
															stroke-linecap="round"
															stroke-linejoin="round"
															stroke-width="2"
															d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
													>
														<animate
																fill="freeze"
																attributeName="stroke-dashoffset"
																dur="0.6s"
																values="56;0"
														></animate>
													</path>
												</svg>
												<span
														class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
												>深色模式</span
												>
											</div>
											<div class="flex items-center">
												<!---->
												<!---->
												<div
														class="relative inline-block mr-2 align-middle select-none transition duration-200 ease-in"
												>
													<div class="switch">
														<input id="toggle" type="checkbox" />
														<label for="toggle"></label>
													</div>
												</div>
											</div>
										</div>
										<div
												class="flex items-center justify-between h-[12vw] px-[3.6vw]"
										>
											<div class="flex items-center">
												<svg
														xmlns="http://www.w3.org/2000/svg"
														xmlns:xlink="http://www.w3.org/1999/xlink"
														aria-hidden="true"
														role="img"
														width="1em"
														height="1em"
														viewBox="0 0 24 24"
														class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--mdi"
												>
													<path
															fill="currentColor"
															d="M12 20a7 7 0 0 1-7-7a7 7 0 0 1 7-7a7 7 0 0 1 7 7a7 7 0 0 1-7 7m0-16a9 9 0 0 0-9 9a9 9 0 0 0 9 9a9 9 0 0 0 9-9a9 9 0 0 0-9-9m.5 4H11v6l4.75 2.85l.75-1.23l-4-2.37zM7.88 3.39L6.6 1.86L2 5.71l1.29 1.53zM22 5.72l-4.6-3.86l-1.29 1.53l4.6 3.86z"
													></path>
												</svg>
												<span
														class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
												>定时关闭</span
												>
											</div>
											<div class="flex items-center">
												<!---->
												<svg
														xmlns="http://www.w3.org/2000/svg"
														xmlns:xlink="http://www.w3.org/1999/xlink"
														aria-hidden="true"
														role="img"
														width="1em"
														height="1em"
														viewBox="0 0 24 24"
														class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
														style="color: rgb(181, 181, 181)"
												>
													<g fill="none" fill-rule="evenodd">
														<path
																d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
														></path>
														<path
																fill="currentColor"
																d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
														></path>
													</g>
												</svg>
												<!---->
											</div>
										</div>
										<div
												class="flex items-center justify-between h-[12vw] px-[3.6vw]"
										>
											<div class="flex items-center">
												<svg
														xmlns="http://www.w3.org/2000/svg"
														xmlns:xlink="http://www.w3.org/1999/xlink"
														aria-hidden="true"
														role="img"
														width="1em"
														height="1em"
														viewBox="0 0 256 256"
														class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--ph"
												>
													<path
															fill="currentColor"
															d="m245.68 64.73l-51.77-28.24A4 4 0 0 0 192 36h-32a4 4 0 0 0-4 4a28 28 0 0 1-56 0a4 4 0 0 0-4-4H64a4 4 0 0 0-1.9.5L10.32 64.73a11.79 11.79 0 0 0-5 15.89l19.28 36.81a12.37 12.37 0 0 0 11 6.57H60v84a12 12 0 0 0 12 12h112a12 12 0 0 0 12-12v-84h24.33a12.37 12.37 0 0 0 11-6.57l19.28-36.81a11.79 11.79 0 0 0-4.93-15.89M35.67 116a4.46 4.46 0 0 1-4-2.28L12.44 76.91a3.79 3.79 0 0 1 1.71-5.15L60 46.74V116ZM188 208a4 4 0 0 1-4 4H72a4 4 0 0 1-4-4V44h24.22a36 36 0 0 0 71.56 0H188Zm55.56-131.09l-19.27 36.81a4.46 4.46 0 0 1-4 2.28H196V46.74l45.85 25a3.79 3.79 0 0 1 1.71 5.17"
													></path>
												</svg>
												<span
														class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
												>个性装扮</span
												>
											</div>
											<div class="flex items-center">
												<!---->
												<svg
														xmlns="http://www.w3.org/2000/svg"
														xmlns:xlink="http://www.w3.org/1999/xlink"
														aria-hidden="true"
														role="img"
														width="1em"
														height="1em"
														viewBox="0 0 24 24"
														class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
														style="color: rgb(181, 181, 181)"
												>
													<g fill="none" fill-rule="evenodd">
														<path
																d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
														></path>
														<path
																fill="currentColor"
																d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
														></path>
													</g>
												</svg>
												<!---->
											</div>
										</div>
										<div
												class="flex items-center justify-between h-[12vw] px-[3.6vw]"
										>
											<div class="flex items-center">
												<svg
														xmlns="http://www.w3.org/2000/svg"
														xmlns:xlink="http://www.w3.org/1999/xlink"
														aria-hidden="true"
														role="img"
														width="1em"
														height="1em"
														viewBox="0 0 24 24"
														class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--iconoir"
												>
													<path
															fill="none"
															stroke="currentColor"
															stroke-linecap="round"
															stroke-linejoin="round"
															stroke-width="1.5"
															d="M12 13v5m0 3.01l.01-.011M4 13.5l-.485.121A2 2 0 0 0 2 15.561v1.877a2 2 0 0 0 1.515 1.94l1.74.436A.6.6 0 0 0 6 19.23v-5.463a.6.6 0 0 0-.746-.582zm0 0V13c0-4.97 3.582-9 8-9s8 4.03 8 9v.5m0 0l.485.121A2 2 0 0 1 22 15.561v1.877a2 2 0 0 1-1.515 1.94l-1.74.436A.6.6 0 0 1 18 19.23v-5.463a.6.6 0 0 1 .745-.582z"
													></path>
												</svg>
												<span
														class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
												>边听边存</span
												>
											</div>
											<div class="flex items-center">
												<span class="text-[color:#a7a7a7] text-[3vw]">未开启</span>
												<svg
														xmlns="http://www.w3.org/2000/svg"
														xmlns:xlink="http://www.w3.org/1999/xlink"
														aria-hidden="true"
														role="img"
														width="1em"
														height="1em"
														viewBox="0 0 24 24"
														class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
														style="color: rgb(181, 181, 181)"
												>
													<g fill="none" fill-rule="evenodd">
														<path
																d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
														></path>
														<path
																fill="currentColor"
																d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
														></path>
													</g>
												</svg>
												<!---->
											</div>
										</div>
										<div
												class="flex items-center justify-between h-[12vw] px-[3.6vw]"
										>
											<div class="flex items-center">
												<svg
														xmlns="http://www.w3.org/2000/svg"
														xmlns:xlink="http://www.w3.org/1999/xlink"
														aria-hidden="true"
														role="img"
														width="1em"
														height="1em"
														viewBox="0 0 24 24"
														class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--iconoir"
												>
													<path
															fill="none"
															stroke="currentColor"
															stroke-linecap="round"
															stroke-linejoin="round"
															stroke-width="1.5"
															d="M12 13v5m0 3.01l.01-.011M4 13.5l-.485.121A2 2 0 0 0 2 15.561v1.877a2 2 0 0 0 1.515 1.94l1.74.436A.6.6 0 0 0 6 19.23v-5.463a.6.6 0 0 0-.746-.582zm0 0V13c0-4.97 3.582-9 8-9s8 4.03 8 9v.5m0 0l.485.121A2 2 0 0 1 22 15.561v1.877a2 2 0 0 1-1.515 1.94l-1.74.436A.6.6 0 0 1 18 19.23v-5.463a.6.6 0 0 1 .745-.582z"
													></path>
												</svg>
												<span
														class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
												>在线听歌免流量</span
												>
											</div>
											<div class="flex items-center">
												<!---->
												<svg
														xmlns="http://www.w3.org/2000/svg"
														xmlns:xlink="http://www.w3.org/1999/xlink"
														aria-hidden="true"
														role="img"
														width="1em"
														height="1em"
														viewBox="0 0 24 24"
														class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
														style="color: rgb(181, 181, 181)"
												>
													<g fill="none" fill-rule="evenodd">
														<path
																d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
														></path>
														<path
																fill="currentColor"
																d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
														></path>
													</g>
												</svg>
												<!---->
											</div>
										</div>
										<div
												class="flex items-center justify-between h-[12vw] px-[3.6vw]"
										>
											<div class="flex items-center">
												<svg
														xmlns="http://www.w3.org/2000/svg"
														xmlns:xlink="http://www.w3.org/1999/xlink"
														aria-hidden="true"
														role="img"
														width="1em"
														height="1em"
														viewBox="0 0 24 24"
														class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--solar"
												>
													<g fill="none" stroke="currentColor" stroke-width="1.5">
														<path
																d="M2 12c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172C22 6.343 22 8.229 22 12c0 3.771 0 5.657-1.172 6.828C19.657 20 17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172C2 17.657 2 15.771 2 12Z"
														></path>
														<path
																stroke-linecap="round"
																d="M10 16H6m8 0h-1.5M2 10h20"
														></path>
													</g>
												</svg>
												<span
														class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
												>音乐黑名单</span
												>
											</div>
											<div class="flex items-center">
												<span class="text-[color:#a7a7a7] text-[3vw]">未开启</span>
												<svg
														xmlns="http://www.w3.org/2000/svg"
														xmlns:xlink="http://www.w3.org/1999/xlink"
														aria-hidden="true"
														role="img"
														width="1em"
														height="1em"
														viewBox="0 0 24 24"
														class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
														style="color: rgb(181, 181, 181)"
												>
													<g fill="none" fill-rule="evenodd">
														<path
																d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
														></path>
														<path
																fill="currentColor"
																d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
														></path>
													</g>
												</svg>
												<!---->
											</div>
										</div>
										<div
												class="flex items-center justify-between h-[12vw] px-[3.6vw]"
										>
											<div class="flex items-center">
												<svg
														xmlns="http://www.w3.org/2000/svg"
														xmlns:xlink="http://www.w3.org/1999/xlink"
														aria-hidden="true"
														role="img"
														width="1em"
														height="1em"
														viewBox="0 0 1024 1024"
														class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--ant-design"
												>
													<path
															fill="currentColor"
															d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m0 820c-205.4 0-372-166.6-372-372c0-89 31.3-170.8 83.5-234.8l523.3 523.3C682.8 852.7 601 884 512 884m288.5-137.2L277.2 223.5C341.2 171.3 423 140 512 140c205.4 0 372 166.6 372 372c0 89-31.3 170.8-83.5 234.8"
													></path>
												</svg>
												<span
														class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
												>青少年模式</span
												>
											</div>
											<div class="flex items-center">
												<span class="text-[color:#a7a7a7] text-[3vw]">未开启</span>
												<svg
														xmlns="http://www.w3.org/2000/svg"
														xmlns:xlink="http://www.w3.org/1999/xlink"
														aria-hidden="true"
														role="img"
														width="1em"
														height="1em"
														viewBox="0 0 24 24"
														class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
														style="color: rgb(181, 181, 181)"
												>
													<g fill="none" fill-rule="evenodd">
														<path
																d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
														></path>
														<path
																fill="currentColor"
																d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
														></path>
													</g>
												</svg>
												<!---->
											</div>
										</div>
										<div
												class="flex items-center justify-between h-[12vw] px-[3.6vw]"
										>
											<div class="flex items-center">
												<svg
														xmlns="http://www.w3.org/2000/svg"
														xmlns:xlink="http://www.w3.org/1999/xlink"
														aria-hidden="true"
														role="img"
														width="1em"
														height="1em"
														viewBox="0 0 1024 1024"
														class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--ep"
												>
													<path
															fill="currentColor"
															d="M512 832a320 320 0 1 0 0-640a320 320 0 0 0 0 640m0 64a384 384 0 1 1 0-768a384 384 0 0 1 0 768"
													></path>
													<path
															fill="currentColor"
															d="m292.288 824.576l55.424 32l-48 83.136a32 32 0 1 1-55.424-32zm439.424 0l-55.424 32l48 83.136a32 32 0 1 0 55.424-32zM512 512h160a32 32 0 1 1 0 64H480a32 32 0 0 1-32-32V320a32 32 0 0 1 64 0zM90.496 312.256A160 160 0 0 1 312.32 90.496l-46.848 46.848a96 96 0 0 0-128 128L90.56 312.256zm835.264 0A160 160 0 0 0 704 90.496l46.848 46.848a96 96 0 0 1 128 128z"
													></path>
												</svg>
												<span
														class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
												>音乐闹钟</span
												>
											</div>
											<div class="flex items-center">
												<!---->
												<svg
														xmlns="http://www.w3.org/2000/svg"
														xmlns:xlink="http://www.w3.org/1999/xlink"
														aria-hidden="true"
														role="img"
														width="1em"
														height="1em"
														viewBox="0 0 24 24"
														class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
														style="color: rgb(181, 181, 181)"
												>
													<g fill="none" fill-rule="evenodd">
														<path
																d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
														></path>
														<path
																fill="currentColor"
																d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
														></path>
													</g>
												</svg>
												<!---->
											</div>
										</div>
									</div>
								</div>
								<div
										class="dark:bg-[#2c2c2c] rounded-[15px] bg-[#fff] w-[76vw] mx-auto mt-[4vw]"
								>
									<!---->
									<div class="px-[4vw]">
										<div
												class="flex items-center justify-between h-[12vw] px-[3.6vw]"
										>
											<div class="flex items-center">
												<svg
														xmlns="http://www.w3.org/2000/svg"
														xmlns:xlink="http://www.w3.org/1999/xlink"
														aria-hidden="true"
														role="img"
														width="1em"
														height="1em"
														viewBox="0 0 24 24"
														class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--iconoir"
												>
													<g
															fill="none"
															stroke="currentColor"
															stroke-linecap="round"
															stroke-linejoin="round"
															stroke-width="1.5"
													>
														<path
																d="M4 21.4V2.6a.6.6 0 0 1 .6-.6h11.652a.6.6 0 0 1 .424.176l3.148 3.148A.6.6 0 0 1 20 5.75V21.4a.6.6 0 0 1-.6.6H4.6a.6.6 0 0 1-.6-.6M8 10h8m-8 8h8m-8-4h4"
														></path>
														<path d="M16 2v3.4a.6.6 0 0 0 .6.6H20"></path>
													</g>
												</svg>
												<span
														class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
												>我的订单</span
												>
											</div>
											<div class="flex items-center">
												<!---->
												<svg
														xmlns="http://www.w3.org/2000/svg"
														xmlns:xlink="http://www.w3.org/1999/xlink"
														aria-hidden="true"
														role="img"
														width="1em"
														height="1em"
														viewBox="0 0 24 24"
														class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
														style="color: rgb(181, 181, 181)"
												>
													<g fill="none" fill-rule="evenodd">
														<path
																d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
														></path>
														<path
																fill="currentColor"
																d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
														></path>
													</g>
												</svg>
												<!---->
											</div>
										</div>
										<div
												class="flex items-center justify-between h-[12vw] px-[3.6vw]"
										>
											<div class="flex items-center">
												<svg
														xmlns="http://www.w3.org/2000/svg"
														xmlns:xlink="http://www.w3.org/1999/xlink"
														aria-hidden="true"
														role="img"
														width="1em"
														height="1em"
														viewBox="0 0 512 512"
														class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--ion"
												>
													<path
															fill="none"
															stroke="currentColor"
															stroke-miterlimit="10"
															stroke-width="32"
															d="M366.05 146a46.7 46.7 0 0 1-2.42-63.42a3.87 3.87 0 0 0-.22-5.26l-44.13-44.18a3.89 3.89 0 0 0-5.5 0l-70.34 70.34a23.6 23.6 0 0 0-5.71 9.24a23.66 23.66 0 0 1-14.95 15a23.7 23.7 0 0 0-9.25 5.71L33.14 313.78a3.89 3.89 0 0 0 0 5.5l44.13 44.13a3.87 3.87 0 0 0 5.26.22a46.69 46.69 0 0 1 65.84 65.84a3.87 3.87 0 0 0 .22 5.26l44.13 44.13a3.89 3.89 0 0 0 5.5 0l180.4-180.39a23.7 23.7 0 0 0 5.71-9.25a23.66 23.66 0 0 1 14.95-15a23.6 23.6 0 0 0 9.24-5.71l70.34-70.34a3.89 3.89 0 0 0 0-5.5l-44.13-44.13a3.87 3.87 0 0 0-5.26-.22a46.7 46.7 0 0 1-63.42-2.32Z"
													></path>
													<path
															fill="none"
															stroke="currentColor"
															stroke-linecap="round"
															stroke-miterlimit="10"
															stroke-width="32"
															d="m250.5 140.44l-16.51-16.51m60.53 60.53l-11.01-11m55.03 55.03l-11-11.01m60.53 60.53l-16.51-16.51"
													></path>
												</svg>
												<span
														class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
												>优惠券</span
												>
											</div>
											<div class="flex items-center">
												<!---->
												<svg
														xmlns="http://www.w3.org/2000/svg"
														xmlns:xlink="http://www.w3.org/1999/xlink"
														aria-hidden="true"
														role="img"
														width="1em"
														height="1em"
														viewBox="0 0 24 24"
														class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
														style="color: rgb(181, 181, 181)"
												>
													<g fill="none" fill-rule="evenodd">
														<path
																d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
														></path>
														<path
																fill="currentColor"
																d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
														></path>
													</g>
												</svg>
												<!---->
											</div>
										</div>
										<div
												class="flex items-center justify-between h-[12vw] px-[3.6vw]"
										>
											<div class="flex items-center">
												<svg
														xmlns="http://www.w3.org/2000/svg"
														xmlns:xlink="http://www.w3.org/1999/xlink"
														aria-hidden="true"
														role="img"
														width="1em"
														height="1em"
														viewBox="0 0 1024 1024"
														class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--ep"
												>
													<path
															fill="currentColor"
															d="M864 409.6a192 192 0 0 1-37.888 349.44A256.064 256.064 0 0 1 576 960h-96a32 32 0 1 1 0-64h96a192.06 192.06 0 0 0 181.12-128H736a32 32 0 0 1-32-32V416a32 32 0 0 1 32-32h32c10.368 0 20.544.832 30.528 2.432a288 288 0 0 0-573.056 0A193 193 0 0 1 256 384h32a32 32 0 0 1 32 32v320a32 32 0 0 1-32 32h-32a192 192 0 0 1-96-358.4a352 352 0 0 1 704 0M256 448a128 128 0 1 0 0 256zm640 128a128 128 0 0 0-128-128v256a128 128 0 0 0 128-128"
													></path>
												</svg>
												<span
														class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
												>我的客服</span
												>
											</div>
											<div class="flex items-center">
												<!---->
												<svg
														xmlns="http://www.w3.org/2000/svg"
														xmlns:xlink="http://www.w3.org/1999/xlink"
														aria-hidden="true"
														role="img"
														width="1em"
														height="1em"
														viewBox="0 0 24 24"
														class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
														style="color: rgb(181, 181, 181)"
												>
													<g fill="none" fill-rule="evenodd">
														<path
																d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
														></path>
														<path
																fill="currentColor"
																d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
														></path>
													</g>
												</svg>
												<!---->
											</div>
										</div>
										<div
												class="flex items-center justify-between h-[12vw] px-[3.6vw]"
										>
											<div class="flex items-center">
												<svg
														xmlns="http://www.w3.org/2000/svg"
														xmlns:xlink="http://www.w3.org/1999/xlink"
														aria-hidden="true"
														role="img"
														width="1em"
														height="1em"
														viewBox="0 0 24 24"
														class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--ri"
												>
													<path
															fill="currentColor"
															d="M11 2.05v2.012A8.001 8.001 0 0 0 12 20a8.001 8.001 0 0 0 7.938-7h2.013c-.502 5.053-4.766 9-9.951 9c-5.523 0-10-4.477-10-10c0-5.185 3.947-9.449 9-9.95m9 3.364l-8 8L10.586 12l8-8H14V2h8v8h-2z"
													></path>
												</svg>
												<span
														class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
												>分享网易云音乐</span
												>
											</div>
											<div class="flex items-center">
												<!---->
												<svg
														xmlns="http://www.w3.org/2000/svg"
														xmlns:xlink="http://www.w3.org/1999/xlink"
														aria-hidden="true"
														role="img"
														width="1em"
														height="1em"
														viewBox="0 0 24 24"
														class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
														style="color: rgb(181, 181, 181)"
												>
													<g fill="none" fill-rule="evenodd">
														<path
																d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
														></path>
														<path
																fill="currentColor"
																d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
														></path>
													</g>
												</svg>
												<!---->
											</div>
										</div>
										<div
												class="flex items-center justify-between h-[12vw] px-[3.6vw]"
										>
											<div class="flex items-center">
												<svg
														xmlns="http://www.w3.org/2000/svg"
														xmlns:xlink="http://www.w3.org/1999/xlink"
														aria-hidden="true"
														role="img"
														width="1em"
														height="1em"
														viewBox="0 0 256 256"
														class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--ph"
												>
													<path
															fill="currentColor"
															d="m210.83 85.17l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v176a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V88a4 4 0 0 0-1.17-2.83M156 41.65L198.34 84H156ZM200 220H56a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v124a4 4 0 0 1-4 4"
													></path>
												</svg>
												<span
														class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
												>个人信息收集与使用清单</span
												>
											</div>
											<div class="flex items-center">
												<!---->
												<svg
														xmlns="http://www.w3.org/2000/svg"
														xmlns:xlink="http://www.w3.org/1999/xlink"
														aria-hidden="true"
														role="img"
														width="1em"
														height="1em"
														viewBox="0 0 24 24"
														class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
														style="color: rgb(181, 181, 181)"
												>
													<g fill="none" fill-rule="evenodd">
														<path
																d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
														></path>
														<path
																fill="currentColor"
																d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
														></path>
													</g>
												</svg>
												<!---->
											</div>
										</div>
										<div
												class="flex items-center justify-between h-[12vw] px-[3.6vw]"
										>
											<div class="flex items-center">
												<svg
														xmlns="http://www.w3.org/2000/svg"
														xmlns:xlink="http://www.w3.org/1999/xlink"
														aria-hidden="true"
														role="img"
														width="1em"
														height="1em"
														viewBox="0 0 48 48"
														class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--icon-park-outline"
												>
													<g
															fill="none"
															stroke="currentColor"
															stroke-linejoin="round"
															stroke-width="4"
													>
														<path
																d="M40 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8ZM24 28a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm16 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8ZM8 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm0 32a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z"
														></path>
														<path
																stroke-linecap="round"
																d="M20 40h8M20 8h8M8 20v8m32-8v8"
														></path>
													</g>
												</svg>
												<span
														class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
												>个人信息第三方共享清单</span
												>
											</div>
											<div class="flex items-center">
												<!---->
												<svg
														xmlns="http://www.w3.org/2000/svg"
														xmlns:xlink="http://www.w3.org/1999/xlink"
														aria-hidden="true"
														role="img"
														width="1em"
														height="1em"
														viewBox="0 0 24 24"
														class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
														style="color: rgb(181, 181, 181)"
												>
													<g fill="none" fill-rule="evenodd">
														<path
																d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
														></path>
														<path
																fill="currentColor"
																d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
														></path>
													</g>
												</svg>
												<!---->
											</div>
										</div>
										<div
												class="flex items-center justify-between h-[12vw] px-[3.6vw]"
										>
											<div class="flex items-center">
												<svg
														xmlns="http://www.w3.org/2000/svg"
														xmlns:xlink="http://www.w3.org/1999/xlink"
														aria-hidden="true"
														role="img"
														width="1em"
														height="1em"
														viewBox="0 0 32 32"
														class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--icons8"
												>
													<path
															fill="currentColor"
															d="M16 4c-2.144 0-3.884 1.72-3.97 3.844A9.933 9.933 0 0 0 6 17c0 .17-.008.36 0 .563c-1.185.696-2 1.972-2 3.437c0 2.197 1.803 4 4 4c.575 0 1.13-.122 1.625-.344C11.358 26.112 13.618 27 16 27s4.642-.888 6.375-2.344A3.98 3.98 0 0 0 24 25c2.197 0 4-1.803 4-4c0-1.48-.825-2.777-2.03-3.47c.015-.16.03-.32.03-.53a9.931 9.931 0 0 0-6.03-9.156C19.883 5.72 18.143 4 16 4m0 2c1.116 0 2 .884 2 2s-.884 2-2 2s-2-.884-2-2s.884-2 2-2m-3.53 3.844C13.14 11.118 14.47 12 16 12c1.53 0 2.86-.882 3.53-2.156A7.937 7.937 0 0 1 24 17c-2.197 0-4 1.803-4 4c0 .895.31 1.706.813 2.375A8.08 8.08 0 0 1 16 25a8.077 8.077 0 0 1-4.813-1.625A3.93 3.93 0 0 0 12 21c0-2.197-1.803-4-4-4c0-3.12 1.79-5.856 4.47-7.156M8 19c1.116 0 2 .884 2 2s-.884 2-2 2s-2-.884-2-2s.884-2 2-2m16 0c1.116 0 2 .884 2 2s-.884 2-2 2s-2-.884-2-2s.884-2 2-2"
													></path>
												</svg>
												<span
														class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
												>个人信息与隐私保护</span
												>
											</div>
											<div class="flex items-center">
												<!---->
												<svg
														xmlns="http://www.w3.org/2000/svg"
														xmlns:xlink="http://www.w3.org/1999/xlink"
														aria-hidden="true"
														role="img"
														width="1em"
														height="1em"
														viewBox="0 0 24 24"
														class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
														style="color: rgb(181, 181, 181)"
												>
													<g fill="none" fill-rule="evenodd">
														<path
																d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
														></path>
														<path
																fill="currentColor"
																d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
														></path>
													</g>
												</svg>
												<!---->
											</div>
										</div>
										<div
												class="flex items-center justify-between h-[12vw] px-[3.6vw]"
										>
											<div class="flex items-center">
												<svg
														xmlns="http://www.w3.org/2000/svg"
														xmlns:xlink="http://www.w3.org/1999/xlink"
														aria-hidden="true"
														role="img"
														width="1em"
														height="1em"
														viewBox="0 0 48 48"
														class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--icon-park-outline"
												>
													<g fill="none">
														<path
																stroke="currentColor"
																stroke-linejoin="round"
																stroke-width="4"
																d="M24 44a19.937 19.937 0 0 0 14.142-5.858A19.937 19.937 0 0 0 44 24a19.938 19.938 0 0 0-5.858-14.142A19.937 19.937 0 0 0 24 4A19.938 19.938 0 0 0 9.858 9.858A19.938 19.938 0 0 0 4 24a19.937 19.937 0 0 0 5.858 14.142A19.938 19.938 0 0 0 24 44Z"
														></path>
														<path
																fill="currentColor"
																fill-rule="evenodd"
																d="M24 37a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"
																clip-rule="evenodd"
														></path>
														<path
																stroke="currentColor"
																stroke-linecap="round"
																stroke-linejoin="round"
																stroke-width="4"
																d="M24 12v16"
														></path>
													</g>
												</svg>
												<span
														class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
												>关于</span
												>
											</div>
											<div class="flex items-center">
												<!---->
												<svg
														xmlns="http://www.w3.org/2000/svg"
														xmlns:xlink="http://www.w3.org/1999/xlink"
														aria-hidden="true"
														role="img"
														width="1em"
														height="1em"
														viewBox="0 0 24 24"
														class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
														style="color: rgb(181, 181, 181)"
												>
													<g fill="none" fill-rule="evenodd">
														<path
																d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
														></path>
														<path
																fill="currentColor"
																d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
														></path>
													</g>
												</svg>
												<!---->
											</div>
										</div>
									</div>
								</div>
								<div
										class="dark:bg-[#2c2c2c] h-[12vw] px-[3.6vw] bg-[#fff] w-[76vw] mt-[4vw] rounded-[15px] mx-auto leading-[12vw] text-center text-[3.6vw] text-[#ef4239]"
								>
									关闭云音乐
								</div>
							</div>
						</div>
					</div>
				</div>
			</a-drawer>
			<div class="relative" >
				<label 	@cilck="handleClick" for="">
					<input
							type="text"
							placeholder="Love Is Gone (Acoustic)"
							class="dark:from-[#34304b] dark:to-[#403246] dark:border-0 text-[4.47vw] pl-[8vw] bg-gradient-to-r from-[#d9ddfd] text-[#8189A1] to-[#f3d9ef] opacity-0.2 w-[75vw] h-[10vw] border-2 border-[#CCCEF7] rounded-[25px]"

					/>
				</label >
				<svg
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						aria-hidden="true"
						role="img"
						width="1em"
						height="1em"
						viewBox="0 0 24 24"
						class="absolute left-[3.68vw] top-[3vw] w-[4.47vw] h-[4.47vw] text-[#8189A1] iconify iconify--tabler"
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
				<svg
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						aria-hidden="true"
						role="img"
						width="1em"
						height="1em"
						viewBox="0 0 24 24"
						class="absolute right-[3.68vw] top-[3vw] w-[4.47vw] h-[4.47vw] text-[#8189A1] iconify iconify--tabler"
				>
					<path
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 7V6a2 2 0 0 1 2-2h2M4 17v1a2 2 0 0 0 2 2h2m8-16h2a2 2 0 0 1 2 2v1m-4 13h2a2 2 0 0 0 2-2v-1M5 12h14"
					></path>
				</svg>
			</div>
			<svg
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					aria-hidden="true"
					role="img"
					width="8vw"
					height="8vw"
					viewBox="0 0 24 24"
					class="dark:text-[#e8eaf2] text-[#3A455B] iconify iconify--material-symbols"
			>
				<path
						fill="currentColor"
						d="m5 10l-.95-2.05L2 7l2.05-.95L5 4l.95 2.05L8 7l-2.05.95L5 10Zm13-3l-.625-1.375L16 5l1.375-.625L18 3l.625 1.375L20 5l-1.375.625L18 7Zm2 4l-.625-1.375L18 9l1.375-.625L20 7l.625 1.375L22 9l-1.375.625L20 11Zm-8 4q-1.25 0-2.125-.875T9 12V6q0-1.25.875-2.125T12 3q1.25 0 2.125.875T15 6v6q0 1.25-.875 2.125T12 15Zm0-6Zm-1 13v-3.075q-2.6-.35-4.3-2.325T5 12h2q0 2.075 1.463 3.538T12 17q2.075 0 3.538-1.463T17 12h2q0 2.625-1.7 4.6T13 18.925V22h-2Zm1-9q.425 0 .713-.288T13 12V6q0-.425-.288-.713T12 5q-.425 0-.713.288T11 6v6q0 .425.288.713T12 13Z"
				></path>
			</svg>
		</div>
		<div class="w-[100vw] px-[5vw] mt-[2vw]">
			<van-swipe :autoplay="3000" indicator-color="white" class="rounded-[5vw]">
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
				<div
						class="flex w-[190vw] mx-auto overflow-hidden h-[20vw] scroll-content relative"
				>
					<div
							data-v-7994de73=""
							class="w-[19vw] scroll-item flex items-center justify-center flex-wrap mr-[6vw]"
					>
						<img
								data-v-7994de73=""
								src="http://p1.music.126.net/4DpSgAVpJny4Ewf-Xw_WQQ==/109951163986641971.jpg"
								alt=""
								class="red-image"
						/>
						<p
								data-v-7994de73=""
								class="dark:text-[#bcbec5] text-[#666F7D] text-center text-[2.78vw] w-[100%] mt-[-2vw]"
						>
							每日推荐
						</p>
					</div>
					<div
							data-v-7994de73=""
							class="w-[19vw] scroll-item flex items-center justify-center flex-wrap mr-[6vw]"
					>
						<img
								data-v-7994de73=""
								src="http://p1.music.126.net/Shi7cRT1bDhwpVDM7AOFXg==/109951165265330616.jpg"
								alt=""
								class="red-image"
						/>
						<p
								data-v-7994de73=""
								class="dark:text-[#bcbec5] text-[#666F7D] text-center text-[2.78vw] w-[100%] mt-[-2vw]"
						>
							私人FM
						</p>
					</div>
					<div
							data-v-7994de73=""
							class="w-[19vw] scroll-item flex items-center justify-center flex-wrap mr-[6vw]"
					>
						<img
								data-v-7994de73=""
								src="http://p1.music.126.net/uG5p6CnwAHrLqOkaSeRlnA==/109951163986649164.jpg"
								alt=""
								class="red-image"
						/>
						<p
								data-v-7994de73=""
								class="dark:text-[#bcbec5] text-[#666F7D] text-center text-[2.78vw] w-[100%] mt-[-2vw]"
						>
							歌单
						</p>
					</div>
					<div
							data-v-7994de73=""
							class="w-[19vw] scroll-item flex items-center justify-center flex-wrap mr-[6vw]"
					>
						<img
								data-v-7994de73=""
								src="http://p1.music.126.net/SDFC6A3X2wzUCavYyeGIOg==/109951163986649670.jpg"
								alt=""
								class="red-image"
						/>
						<p
								data-v-7994de73=""
								class="dark:text-[#bcbec5] text-[#666F7D] text-center text-[2.78vw] w-[100%] mt-[-2vw]"
						>
							排行榜
						</p>
					</div>
					<div
							data-v-7994de73=""
							class="w-[19vw] scroll-item flex items-center justify-center flex-wrap mr-[6vw]"
					>
						<img
								data-v-7994de73=""
								src="http://p1.music.126.net/Kb4oK0m_ocs3FR3lo-r9yg==/109951167319110429.jpg"
								alt=""
								class="red-image"
						/>
						<p
								data-v-7994de73=""
								class="dark:text-[#bcbec5] text-[#666F7D] text-center text-[2.78vw] w-[100%] mt-[-2vw]"
						>
							有声书
						</p>
					</div>
					<div
							data-v-7994de73=""
							class="w-[19vw] scroll-item flex items-center justify-center flex-wrap mr-[6vw]"
					>
						<img
								data-v-7994de73=""
								src="http://p1.music.126.net/nRWhsf3P7r7eqHz-v61VBg==/109951166989045593.jpg"
								alt=""
								class="red-image"
						/>
						<p
								data-v-7994de73=""
								class="dark:text-[#bcbec5] text-[#666F7D] text-center text-[2.78vw] w-[100%] mt-[-2vw]"
						>
							数字专辑
						</p>
					</div>
					<div
							data-v-7994de73=""
							class="w-[19vw] scroll-item flex items-center justify-center flex-wrap mr-[6vw]"
					>
						<img
								data-v-7994de73=""
								src="http://p1.music.126.net/2JvVZZjcjyCE72fGMsC1hg==/109951166989043011.jpg"
								alt=""
								class="red-image"
						/>
						<p
								data-v-7994de73=""
								class="dark:text-[#bcbec5] text-[#666F7D] text-center text-[2.78vw] w-[100%] mt-[-2vw]"
						>
							直播
						</p>
					</div>
					<div
							data-v-7994de73=""
							class="w-[19vw] scroll-item flex items-center justify-center flex-wrap mr-[6vw]"
					>
						<img
								data-v-7994de73=""
								src="http://p1.music.126.net/BAOWsqZmmxL8JIH-wejMmQ==/109951167294312390.jpg"
								alt=""
								class="red-image"
						/>
						<p
								data-v-7994de73=""
								class="dark:text-[#bcbec5] text-[#666F7D] text-center text-[2.78vw] w-[100%] mt-[-2vw]"
						>
							关注新歌
						</p>
					</div>
					<div
							data-v-7994de73=""
							class="w-[19vw] scroll-item flex items-center justify-center flex-wrap mr-[6vw]"
					>
						<img
								data-v-7994de73=""
								src="http://p1.music.126.net/gk99UFRasebERf38t6A1kA==/109951168168319514.jpg"
								alt=""
								class="red-image"
						/>
						<p
								data-v-7994de73=""
								class="dark:text-[#bcbec5] text-[#666F7D] text-center text-[2.78vw] w-[100%] mt-[-2vw]"
						>
							收藏家
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="flex justify-between mt-[10px]">
			<div class="ml-[15px]">
				<span class="text-[16px] font-bold">推荐歌单</span>
				<i class="el-icon-arrow-right font-bold"></i>
			</div>
			<i class="el-icon-more rotate-90 mr-[10px]"></i>
		</div>
		<div
				class="w-[98vw] h-[46vw] pt-[1vw] overflow-hidden scroll-wrapper border-[#EBEDF2]"
		>
			<div
					class="w-[210vw] flex pl-[2vw]"
					style="
          transform: translateX(0px) translateY(0px) translateZ(1px);
          transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
          transition-property: transform;
          transition-duration: 0ms;
        "
			>
				<div class="pt-[1vw] relative" style="pointer-events: auto">
					<div class="w-[31vw] relative z-[1]">
						<div
								class="dark:bg-[#1A1C23] w-[31vw] h-[31vw] bg-[#f3f3f3] overflow-hidden relative rounded-[8px]"
						>
							<div
									class="absolute top-0 left-0&quot; abc-enter-active abc-enter-to"
							>
								<img
										src="http://p1.music.126.net/YGA9Lbal7iE7T3DjjEn86A==/109951168667709218.jpg"
										alt=""
										class="w-[31vw] h-[31vw] rounded-[8px]"
								/>
							</div>
							<div
									class="absolute top-0 left-0&quot; abc-leave-active abc-leave-to"
							>
								<img
										src="http://p1.music.126.net/dp5hyKzyBlfMjLpsD6l4Qw==/109951164464461384.jpg"
										alt=""
										class="w-[31vw] h-[31vw] rounded-[8px]"
								/>
							</div>
							<svg
									xmlns="http://www.w3.org/2000/svg"
									xmlns:xlink="http://www.w3.org/1999/xlink"
									aria-hidden="true"
									role="img"
									width="1em"
									height="1em"
									viewBox="0 0 24 24"
									class="absolute text-[#fff] w-[10vw] h-[6vw] right-0 iconify iconify--iconoir"
							>
								<path
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="1.5"
										d="m14 9l-.25.375M10 9a5 5 0 1 0 0 6l.334-.5M10 9l4 6a5 5 0 1 0 0-6"
								></path>
							</svg>
						</div>
						<p
								class="dark:text-[#e3e5ec] text-[2.78vw] text-[#3E4759] scroll-item"
						>
							战歌一响，啥事没有
						</p>
					</div>
					<div
							class="dark:bg-[#272727] w-[26vw] h-[31vw] bg-[#ddd] absolute top-[0vw] left-1/2 -translate-x-1/2 rounded-[8px] z-[0]"
					></div>
				</div>
				<div
						data-v-052bb87c=""
						class="w-[31vw] ml-[3vw]"
						style="pointer-events: auto"
				>
					<div
							data-v-052bb87c=""
							class="w-[31vw] h-[31vw] rounded-[8px] overflow-hidden relative pt-[1vw]"
					>
						<img
								data-v-052bb87c=""
								src="http://p1.music.126.net/Z_7_3RlHGlEN6Sv8_qyOyA==/109951168998523950.jpg"
								alt=""
								class="w-[31vw] h-[31vw] rounded-[8px] relative z-[1]"
						/>
						<svg
								data-v-052bb87c=""
								xmlns="http://www.w3.org/2000/svg"
								xmlns:xlink="http://www.w3.org/1999/xlink"
								aria-hidden="true"
								role="img"
								width="10"
								height="10"
								viewBox="0 0 512 512"
								class="absolute bottom-[2vw] right-[2.5vw] text-[#fff] w-[5vw] h-[5vw] z-[2] iconify iconify--ion"
						>
							<path
									fill="currentColor"
									d="M133 440a35.37 35.37 0 0 1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0 1 35.77.45l247.85 148.36a36 36 0 0 1 0 61l-247.89 148.4A35.5 35.5 0 0 1 133 440"
							></path>
						</svg>
						<div
								data-v-052bb87c=""
								class="absolute top-0 left-0 pr-[2.4vw] pt-[2vw] justify-end font-[800] text-[#fff] flex items-center w-[31vw] z-[2]"
						>
							<svg
									data-v-052bb87c=""
									xmlns="http://www.w3.org/2000/svg"
									xmlns:xlink="http://www.w3.org/1999/xlink"
									aria-hidden="true"
									role="img"
									width="10"
									height="10"
									viewBox="0 0 512 512"
									class="text-[#fff] w-[3vw] h-[3vw] iconify iconify--ion"
							>
								<path
										fill="currentColor"
										d="M133 440a35.37 35.37 0 0 1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0 1 35.77.45l247.85 148.36a36 36 0 0 1 0 61l-247.89 148.4A35.5 35.5 0 0 1 133 440"
								></path>
							</svg>
							<span data-v-052bb87c="" class="font-[800] text-[2.5vw]"
							>197万</span
							>
						</div>
						<div
								data-v-052bb87c=""
								class="dark:bg-[#272727] w-[26vw] h-[31vw] bg-[#ddd] absolute top-[0vw] left-1/2 -translate-x-1/2 rounded-[8px] z-[0]"
						></div>
					</div>
					<p
							data-v-052bb87c=""
							class="dark:text-[#e3e5ec] text-[2.78vw] text-[#3E4759] scroll-item"
					>
						宿命感/氛围感很强的歌曲
					</p>
				</div>
				<div
						data-v-052bb87c=""
						class="w-[31vw] ml-[3vw]"
						style="pointer-events: auto"
				>
					<div
							data-v-052bb87c=""
							class="w-[31vw] h-[31vw] rounded-[8px] overflow-hidden relative pt-[1vw]"
					>
						<img
								data-v-052bb87c=""
								src="http://p1.music.126.net/N1af1QZr5qSsm4ACU94FqQ==/109951169528257302.jpg"
								alt=""
								class="w-[31vw] h-[31vw] rounded-[8px] relative z-[1]"
						/>
						<svg
								data-v-052bb87c=""
								xmlns="http://www.w3.org/2000/svg"
								xmlns:xlink="http://www.w3.org/1999/xlink"
								aria-hidden="true"
								role="img"
								width="10"
								height="10"
								viewBox="0 0 512 512"
								class="absolute bottom-[2vw] right-[2.5vw] text-[#fff] w-[5vw] h-[5vw] z-[2] iconify iconify--ion"
						>
							<path
									fill="currentColor"
									d="
                  M133 440a35.37 35.37 0 0 1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.130 0 1 35.77.45l247.85 148.36a36 36 0 0 1 0 61l-247.89 148.4A35.5 35.5 0 0 1 133 440"
							></path>
						</svg>
						<div
								data-v-052bb87c=""
								class="absolute top-0 left-0 pr-[2.4vw] pt-[2vw] justify-end font-[800] text-[#fff] flex items-center w-[31vw] z-[2]"
						>
							<svg
									data-v-052bb87c=""
									xmlns="http://www.w3.org/2000/svg"
									xmlns:xlink="http://www.w3.org/1999/xlink"
									aria-hidden="true"
									role="img"
									width="10"
									height="10"
									viewBox="0 0 512 512"
									class="text-[#fff] w-[3vw] h-[3vw] iconify iconify--ion"
							>
								<path
										fill="currentColor"
										d="M133 440a35.37 35.37 0 0 1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0 1 35.77.45l247.85 148.36a36 36 0 0 1 0 61l-247.89 148.4A35.5 35.5 0 0 1 133 440"
								></path>
							</svg>
							<span data-v-052bb87c="" class="font-[800] text-[2.5vw]"
							>126万</span
							>
						</div>
						<div
								data-v-052bb87c=""
								class="dark:bg-[#272727] w-[26vw] h-[31vw] bg-[#ddd] absolute top-[0vw] left-1/2 -translate-x-1/2 rounded-[8px] z-[0]"
						></div>
					</div>
					<p
							data-v-052bb87c=""
							class="dark:text-[#e3e5ec] text-[2.78vw] text-[#3E4759] scroll-item"
					>
						逃脱不掉的宿命感 一听就忍不住落泪
					</p>
				</div>
				<div
						data-v-052bb87c=""
						class="w-[31vw] ml-[3vw]"
						style="pointer-events: auto"
				>
					<div
							data-v-052bb87c=""
							class="w-[31vw] h-[31vw] rounded-[8px] overflow-hidden relative pt-[1vw]"
					>
						<img
								data-v-052bb87c=""
								src="http://p1.music.126.net/hjXLumx4KDDtZcK0qmkK0Q==/109951166071618084.jpg"
								alt=""
								class="w-[31vw] h-[31vw] rounded-[8px] relative z-[1]"
						/>
						<svg
								data-v-052bb87c=""
								xmlns="http://www.w3.org/2000/svg"
								xmlns:xlink="http://www.w3.org/1999/xlink"
								aria-hidden="true"
								role="img"
								width="10"
								height="10"
								viewBox="0 0 512 512"
								class="absolute bottom-[2vw] right-[2.5vw] text-[#fff] w-[5vw] h-[5vw] z-[2] iconify iconify--ion"
						>
							<path
									fill="currentColor"
									d="M133 440a35.37 35.37 0 0 1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0 1 35.77.45l247.85 148.36a36 36 0 0 1 0 61l-247.89 148.4A35.5 35.5 0 0 1 133 440"
							></path>
						</svg>
						<div
								data-v-052bb87c=""
								class="absolute top-0 left-0 pr-[2.4vw] pt-[2vw] justify-end font-[800] text-[#fff] flex items-center w-[31vw] z-[2]"
						>
							<svg
									data-v-052bb87c=""
									xmlns="http://www.w3.org/2000/svg"
									xmlns:xlink="http://www.w3.org/1999/xlink"
									aria-hidden="true"
									role="img"
									width="10"
									height="10"
									viewBox="0 0 512 512"
									class="text-[#fff] w-[3vw] h-[3vw] iconify iconify--ion"
							>
								<path
										fill="currentColor"
										d="M133 440a35.37 35.37 0 0 1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0 1 35.77.45l247.85 148.36a36 36 0 0 1 0 61l-247.89 148.4A35.5 35.5 0 0 1 133 440"
								></path>
							</svg>
							<span data-v-052bb87c="" class="font-[800] text-[2.5vw]"
							>652万</span
							>
						</div>
						<div
								data-v-052bb87c=""
								class="dark:bg-[#272727] w-[26vw] h-[31vw] bg-[#ddd] absolute top-[0vw] left-1/2 -translate-x-1/2 rounded-[8px]z-[0]"
						></div>
					</div>
					<p
							data-v-052bb87c=""
							class="dark:text-[#e3e5ec] text-[2.78vw] text-[#3E4759] scroll-item"
					>
						欧美R&amp;B ·节奏布鲁斯的轻奢尾调
					</p>
				</div>
				<div
						data-v-052bb87c=""
						class="w-[31vw] ml-[3vw]"
						style="pointer-events: auto"
				>
					<div
							data-v-052bb87c=""
							class="w-[31vw] h-[31vw] rounded-[8px] overflow-hidden relative pt-[1vw]"
					>
						<img
								data-v-052bb87c=""
								src="http://p1.music.126.net/11DTjeUOH2uNKkHxTZDQRQ==/109951167757381020.jpg"
								alt=""
								class="w-[31vw] h-[31vw] rounded-[8px] relative z-[1]"
						/>
						<svg
								data-v-052bb87c=""
								xmlns="http://www.w3.org/2000/svg"
								xmlns:xlink="http://www.w3.org/1999/xlink"
								aria-hidden="true"
								role="img"
								width="10"
								height="10"
								viewBox="0 0 512 512"
								class="absolute bottom-[2vw] right-[2.5vw] text-[#fff] w-[5vw] h-[5vw] z-[2] iconify iconify--ion"
						>
							<path
									fill="currentColor"
									d="M133 440a35.37 35.37 0 0 1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0 1 35.77.45l247.85 148.36a36 36 0 0 1 0 61l-247.89 148.4A35.5 35.5 0 0 1 133 440"
							></path>
						</svg>
						<div
								data-v-052bb87c=""
								class="absolute top-0 left-0 pr-[2.4vw] pt-[2vw] justify-end font-[800] text-[#fff] flex items-center w-[31vw] z-[2]"
						>
							<svg
									data-v-052bb87c=""
									xmlns="http://www.w3.org/2000/svg"
									xmlns:xlink="http://www.w3.org/1999/xlink"
									aria-hidden="true"
									role="img"
									width="10"
									height="10"
									viewBox="0 0 512 512"
									class="text-[#fff] w-[3vw] h-[3vw] iconify iconify--ion"
							>
								<path
										fill="currentColor"
										d="M133 440a35.37 35.37 0 0 1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0 1 35.77.45l247.85 148.36a36 36 0 0 1 0 61l-247.89 148.4A35.5 35.5 0 0 1 133 440"
								></path>
							</svg>
							<span data-v-052bb87c="" class="font-[800] text-[2.5vw]"
							>190万</span
							>
						</div>
						<div
								data-v-052bb87c=""
								class="dark:bg-[#272727] w-[26vw] h-[31vw] bg-[#ddd] absolute top-[0vw] left-1/2 -translate-x-1/2 rounded-[8px] z-[0]"
						></div>
					</div>
					<p
							data-v-052bb87c=""
							class="dark:text-[#e3e5ec] text-[2.78vw] text-[#3E4759] scroll-item"
					>
						欧美R&amp;B 丨微醺 暧昧 氛围感
					</p>
				</div>
				<div
						data-v-052bb87c=""
						class="w-[31vw] ml-[3vw]"
						style="pointer-events: auto"
				>
					<div
							data-v-052bb87c=""
							class="w-[31vw] h-[31vw] rounded-[8px] overflow-hidden relative pt-[1vw]"
					>
						<img
								data-v-052bb87c=""
								src="http://p1.music.126.net/kVYhrQAyF2dzvJ2VtLRhUw==/109951166287141848.jpg"
								alt=""
								class="w-[31vw] h-[31vw] rounded-[8px] relative z-[1]"
						/>
						<svg
								data-v-052bb87c=""
								xmlns="http://www.w3.org/2000/svg"
								xmlns:xlink="http://www.w3.org/1999/xlink"
								aria-hidden="true"
								role="img"
								width="10"
								height="10"
								viewBox="0 0 512 512"
								class="absolute bottom-[2vw] right-[2.5vw] text-[#fff] w-[5vw] h-[5vw] z-[2] iconify iconify--ion"
						>
							<path
									fill="currentColor"
									d="M133 440a35.37 35.37 0 0 1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0 1 35.77.45l247.85 148.36a36 36 0 0 1 0 61l-247.89 148.4A35.5 35.5 0 0 1 133 440"
							></path>
						</svg>
						<div
								data-v-052bb87c=""
								class="absolute top-0 left-0 pr-[2.4vw] pt-[2vw] justify-end font-[800] text-[#fff] flex items-center w-[31vw] z-[2]"
						>
							<svg
									data-v-052bb87c=""
									xmlns="http://www.w3.org/2000/svg"
									xmlns:xlink="http://www.w3.org/1999/xlink"
									aria-hidden="true"
									role="img"
									width="10"
									height="10"
									viewBox="0 0 512 512"
									class="text-[#fff] w-[3vw] h-[3vw] iconify iconify--ion"
							>
								<path
										fill="currentColor"
										d="M133 440a35.37 35.37 0 0 1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0 1 35.77.45l247.85 148.36a36 36 0 0 1 0 61l-247.89 148.4A35.5 35.5 0 0 1 133 440"
								></path>
							</svg>
							<span data-v-052bb87c="" class="font-[800] text-[2.5vw]"
							>17万</span
							>
						</div>
						<div
								data-v-052bb87c=""
								class="dark:bg-[#272727] w-[26vw] h-[31vw] bg-[#ddd] absolute top-[0vw] left-1/2 -translate-x-1/2 rounded-[8px] z-[0]"
						></div>
					</div>
					<p
							data-v-052bb87c=""
							class="dark:text-[#e3e5ec] text-[2.78vw] text-[#3E4759] scroll-item"
					>
						关于南京热心市民李先生
					</p>
				</div>
			</div>
		</div>
		<div class="flex justify-between mt-[10px]">
			<div class="ml-[15px]">
				<span class="text-[14px] font-bold">新歌新碟\音乐专辑</span>
				<i class="el-icon-arrow-right font-bold"></i>
			</div>
			<i class="el-icon-more rotate-90 mr-[10px]"></i>
		</div>
		<div
				class="w-[98vw] pt-[1vw] pl-[2vw] overflow-hidden scroll-wrapper border-[#EBEDF2]"
		>
			<div
					class="scroll-content flex w-[710vw]"
					style="
          transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
          transition-property: transform;
          transition-duration: 0ms;
          transform: translateX(-8px) translateY(0px) translateZ(1px);
        "
			>
				<ul
						data-v-fcb07e44=""
						class="w-[88vw] scroll-item pb-[3.8vw]"
						style="pointer-events: auto"
				>
					<li
							data-v-fcb07e44=""
							class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]"
					>
						<div data-v-fcb07e44="" class="flex">
							<img
									data-v-fcb07e44=""
									src="http://p1.music.126.net/TMqzluNtCoyEihb9vJUT6w==/1375489061158167.jpg"
									alt=""
									class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5"
							/>
							<div data-v-fcb07e44="" class="flex-1 pt-[2.85vw] ml-[1vw]">
								<h4
										data-v-fcb07e44=""
										class="dark:text-[#e3e5ec] text-[3.5vw] text-[#3E465B]"
								>
									My Love Is Gone
								</h4>
								<p
										data-v-fcb07e44=""
										class="dark:text-[#a8aaaf] text-[2.36vw] text-[#79838F]"
								>
									爱虽然会迟到 但永远不会消失
								</p>
							</div>
						</div>
					</li>
					<li
							data-v-fcb07e44=""
							class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]"
					>
						<div data-v-fcb07e44="" class="flex">
							<img
									data-v-fcb07e44=""
									src="http://p1.music.126.net/JDvrKc2QLc06Q7F49-9oUA==/109951164985311149.jpg"
									alt=""
									class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5"
							/>
							<div data-v-fcb07e44="" class="flex-1 pt-[2.85vw] ml-[1vw]">
								<h4
										data-v-fcb07e44=""
										class="dark:text-[#e3e5ec] text-[3.5vw] text-[#3E465B]"
								>
									Tick Tick Boom (feat. BygTwo3)
								</h4>
								<p
										data-v-fcb07e44=""
										class="dark:text-[#a8aaaf] text-[2.36vw] text-[#79838F]"
								>
									小众推荐
								</p>
							</div>
						</div>
					</li>
					<li
							data-v-fcb07e44=""
							class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]"
					>
						<div data-v-fcb07e44="" class="flex">
							<img
									data-v-fcb07e44=""
									src="http://p1.music.126.net/lxU4vty4ZasEpluDh2lbPQ==/109951164845981581.jpg"
									alt=""
									class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5"
							/>
							<div data-v-fcb07e44="" class="flex-1 pt-[2.85vw] ml-[1vw]">
								<h4
										data-v-fcb07e44=""
										class="dark:text-[#e3e5ec] text-[3.5vw] text-[#3E465B]"
								>
									Trap Requiem (Original Mix)
								</h4>
								<p
										data-v-fcb07e44=""
										class="dark:text-[#a8aaaf] text-[2.36vw] text-[#79838F]"
								></p>
							</div>
						</div>
					</li>
				</ul>
				<ul
						data-v-fcb07e44=""
						class="w-[88vw] scroll-item pb-[3.8vw]"
						style="pointer-events: auto"
				>
					<li
							data-v-fcb07e44=""
							class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]"
					>
						<div data-v-fcb07e44="" class="flex">
							<img
									data-v-fcb07e44=""
									src="http://p1.music.126.net/pqmGv8jkqGqOtf9OCxBdnA==/109951165424050683.jpg"
									alt=""
									class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5"
							/>
							<div data-v-fcb07e44="" class="flex-1 pt-[2.85vw] ml-[1vw]">
								<h4
										data-v-fcb07e44=""
										class="dark:text-[#e3e5ec] text-[3.5vw] text-[#3E465B]"
								>
									The Feeling
								</h4>
								<p
										data-v-fcb07e44=""
										class="dark:text-[#a8aaaf] text-[2.36vw] text-[#79838F]"
								></p>
							</div>
						</div>
					</li>
					<li
							data-v-fcb07e44=""
							class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]"
					>
						<div data-v-fcb07e44="" class="flex">
							<img
									data-v-fcb07e44=""
									src="http://p1.music.126.net/yrSMeOFPzFZOYd1S8jTxjQ==/109951165210368552.jpg"
									alt=""
									class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5"
							/>
							<div data-v-fcb07e44="" class="flex-1 pt-[2.85vw] ml-[1vw]">
								<h4
										data-v-fcb07e44=""
										class="dark:text-[#e3e5ec] text-[3.5vw] text-[#3E465B]"
								>
									Blood On Me
								</h4>
								<p
										data-v-fcb07e44=""
										class="dark:text-[#a8aaaf] text-[2.36vw] text-[#79838F]"
								>
									小众推荐
								</p>
							</div>
						</div>
					</li>
					<li
							data-v-fcb07e44=""
							class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]"
					>
						<div data-v-fcb07e44="" class="flex">
							<img
									data-v-fcb07e44=""
									src="http://p1.music.126.net/CuVuzuO5K5sahrJ3cdm0vA==/109951167970357963.jpg"
									alt=""
									class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5"
							/>
							<div data-v-fcb07e44="" class="flex-1 pt-[2.85vw] ml-[1vw]">
								<h4
										data-v-fcb07e44=""
										class="dark:text-[#e3e5ec] text-[3.5vw] text-[#3E465B]"
								>
									Dumb
								</h4>
								<p
										data-v-fcb07e44=""
										class="dark:text-[#a8aaaf] text-[2.36vw] text-[#79838F]"
								>
									但我不想知道 我只想关注事实
								</p>
							</div>
						</div>
					</li>
				</ul>
				<ul
						data-v-fcb07e44=""
						class="w-[88vw] scroll-item pb-[3.8vw]"
						style="pointer-events: auto"
				>
					<li
							data-v-fcb07e44=""
							class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]"
					>
						<div data-v-fcb07e44="" class="flex">
							<img
									data-v-fcb07e44=""
									src="http://p1.music.126.net/voUIZPY7cINrYgY2yI7QEA==/109951165984351035.jpg"
									alt=""
									class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5"
							/>
							<div data-v-fcb07e44="" class="flex-1 pt-[2.85vw] ml-[1vw]">
								<h4
										data-v-fcb07e44=""
										class="dark:text-[#e3e5ec] text-[3.5vw] text-[#3E465B]"
								>
									Shakalaka
								</h4>
								<p
										data-v-fcb07e44=""
										class="dark:text-[#a8aaaf] text-[2.36vw] text-[#79838F]"
								>
									世界再喧闹 我也会放歌给自己听
								</p>
							</div>
						</div>
					</li>
					<li
							data-v-fcb07e44=""
							class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]"
					>
						<div data-v-fcb07e44="" class="flex">
							<img
									data-v-fcb07e44=""
									src="http://p1.music.126.net/ArjLjOln2gwfd7MVsb3X0g==/109951163620082907.jpg"
									alt=""
									class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5"
							/>
							<div data-v-fcb07e44="" class="flex-1 pt-[2.85vw] ml-[1vw]">
								<h4
										data-v-fcb07e44=""
										class="dark:text-[#e3e5ec] text-[3.5vw] text-[#3E465B]"
								>
									VEGAS (Extended Mix)
								</h4>
								<p
										data-v-fcb07e44=""
										class="dark:text-[#a8aaaf] text-[2.36vw] text-[#79838F]"
								>
									一支穿云箭 千军万马来相见
								</p>
							</div>
						</div>
					</li>
					<li
							data-v-fcb07e44=""
							class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]"
					>
						<div data-v-fcb07e44="" class="flex">
							<img
									data-v-fcb07e44=""
									src="http://p1.music.126.net/GJyXPzE_Te04X3EEB0AcqA==/109951163132590946.jpg"
									alt=""
									class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5"
							/>
							<div data-v-fcb07e44="" class="flex-1 pt-[2.85vw] ml-[1vw]">
								<h4
										data-v-fcb07e44=""
										class="dark:text-[#e3e5ec] text-[3.5vw] text-[#3E465B]"
								>
									Dancing Together
								</h4>
								<p
										data-v-fcb07e44=""
										class="dark:text-[#a8aaaf] text-[2.36vw] text-[#79838F]"
								>
									失踪人口跳着尬舞回归
								</p>
							</div>
						</div>
					</li>
				</ul>
				<ul
						data-v-fcb07e44=""
						class="w-[88vw] scroll-item pb-[3.8vw]"
						style="pointer-events: auto"
				>
					<li
							data-v-fcb07e44=""
							class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]"
					>
						<div data-v-fcb07e44="" class="flex">
							<img
									data-v-fcb07e44=""
									src="http://p1.music.126.net/xuWIk9HlL6S9J77b_S6Liw==/109951168577172478.jpg"
									alt=""
									class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5"
							/>
							<div data-v-fcb07e44="" class="flex-1 pt-[2.85vw] ml-[1vw]">
								<h4
										data-v-fcb07e44=""
										class="dark:text-[#e3e5ec] text-[3.5vw] text-[#3E465B]"
								>
									Omen
								</h4>
								<p
										data-v-fcb07e44=""
										class="dark:text-[#a8aaaf] text-[2.36vw] text-[#79838F]"
								>
									是时候表演真正的技术了
								</p>
							</div>
						</div>
					</li>
					<li
							data-v-fcb07e44=""
							class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]"
					>
						<div data-v-fcb07e44="" class="flex">
							<img
									data-v-fcb07e44=""
									src="http://p1.music.126.net/kBngCJvOjm4npP0gflDboA==/109951167521749301.jpg"
									alt=""
									class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5"
							/>
							<div data-v-fcb07e44="" class="flex-1 pt-[2.85vw] ml-[1vw]">
								<h4
										data-v-fcb07e44=""
										class="dark:text-[#e3e5ec] text-[3.5vw] text-[#3E465B]"
								>
									Blinding Lights
								</h4>
								<p
										data-v-fcb07e44=""
										class="dark:text-[#a8aaaf] text-[2.36vw] text-[#79838F]"
								>
									冬天之后 我们都是含苞欲放的诗人
								</p>
							</div>
						</div>
					</li>
					<li
							data-v-fcb07e44=""
							class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]"
					>
						<div data-v-fcb07e44="" class="flex">
							<img
									data-v-fcb07e44=""
									src="http://p1.music.126.net/w05uN1cA-soklFbbasf9Zg==/109951163311334857.jpg"
									alt=""
									class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5"
							/>
							<div data-v-fcb07e44="" class="flex-1 pt-[2.85vw] ml-[1vw]">
								<h4
										data-v-fcb07e44=""
										class="dark:text-[#e3e5ec] text-[3.5vw] text-[#3E465B]"
								>
									Deeper Love (Stonebank Remix)
								</h4>
								<p
										data-v-fcb07e44=""
										class="dark:text-[#a8aaaf] text-[2.36vw] text-[#79838F]"
								></p>
							</div>
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
		<div
				class="w-[98vw] pt-[1vw] pl-[2vw] overflow-hidden scroll-wrapper border-[#EBEDF2]"
		>
			<div class="scroll-content flex w-[540vw]">
				<ul
						data-v-7affce21=""
						class="ml-[2vw] dark:bg-[#25272e] dark:bg-gradient-n dark:from-000 dark:via-000 dark:to-000 shadows w-[88vw] scroll-item bg-[#fff] mr-[2vw] rounded-[10px] pt-[4vw] pb-[3.8vw] bg-gradient-to from-ff8177 via-ff8c7f to-b12a5b mb-[2vw]"
				>
					<li
							data-v-7affce21=""
							class="pl-[2vw] w-[88vw] scroll-content pr-[5vw]"
					>
						<div
								data-v-7affce21=""
								class="flex justify-between items-center h-[12vw]"
						>
							<div data-v-7affce21="" class="flex items-center">
                <span
		                data-v-7affce21=""
		                class="dark:text-[#e6e6e9] text-[#374d5b] text-[4vw] font-[800]"
                >星云榜</span
                >
								<svg
										data-v-7affce21=""
										xmlns="http://www.w3.org/2000/svg"
										xmlns:xlink="http://www.w3.org/1999/xlink"
										aria-hidden="true"
										role="img"
										width="1em"
										height="1em"
										viewBox="0 0 24 24"
										class="dark:text-[#e6e6e9] font-[800] text-[#3d475b] iconify iconify--mingcute"
								>
									<g fill="none" fill-rule="evenodd">
										<path
												d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
										></path>
										<path
												fill="currentColor"
												d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
										></path>
									</g>
								</svg>
							</div>
							<span
									data-v-7affce21=""
									class="dark:text-[#8e9097] text-[#939BA1]"
							>精选宝藏新歌</span
							>
						</div>
					</li>
					<li
							data-v-7affce21=""
							class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]"
					>
						<div data-v-7affce21="" class="flex">
							<img
									data-v-7affce21=""
									src="http://p1.music.126.net/4-ihqWsiRaKVB9uQUIwQrQ==/109951169510771909.jpg"
									alt=""
									class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5"
							/>
							<div
									data-v-7affce21=""
									class="flex-1 ml-[1vw] flex items-center pr-[5.7vw] pl-[3.26vw]"
							>
								<div
										data-v-7affce21=""
										class="leading-[14vw] font-[800] flex-3 mr-[3vw] text-[#C28E28] text-[2.8vw]"
								>
									1
								</div>
								<div data-v-7affce21="" class="w-[40vw]">
									<h4
											data-v-7affce21=""
											class="dark:text-[#ebeaf0] text-[3.5vw] text-[#3E465B] text-ellipsis overflow-hidden whitespace-nowrap w-[40vw]"
									>
										罗马
									</h4>
									<p
											data-v-7affce21=""
											class="dark:text-[#a5a7ae] text-[2.36vw] text-[#79838F]"
									>
										杨和苏KeyNG
									</p>
								</div>
								<div
										data-v-7affce21=""
										class="leading-[14vw] flex-3 ml-[4vw] text-[2.43vw]"
								>
									<span data-v-7affce21="" class="text-[#FF3836]">霸榜</span>
								</div>
							</div>
						</div>
					</li>
					<li
							data-v-7affce21=""
							class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]"
					>
						<div data-v-7affce21="" class="flex">
							<img
									data-v-7affce21=""
									src="http://p1.music.126.net/sDCM9NWkp1-MtLGsKvQOqw==/109951169501813454.jpg"
									alt=""
									class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5"
							/>
							<div
									data-v-7affce21=""
									class="flex-1 ml-[1vw] flex items-center pr-[5.7vw] pl-[3.26vw]"
							>
								<div
										data-v-7affce21=""
										class="leading-[14vw] font-[800] flex-3 mr-[3vw] text-[#818AAC] text-[2.8vw]"
								>
									2
								</div>
								<div data-v-7affce21="" class="w-[40vw]">
									<h4
											data-v-7affce21=""
											class="dark:text-[#ebeaf0] text-[3.5vw] text-[#3E465B] text-ellipsis overflow-hidden whitespace-nowrap w-[40vw]"
									>
										我在原地等你
									</h4>
									<p
											data-v-7affce21=""
											class="dark:text-[#a5a7ae] text-[2.36vw] text-[#79838F]"
									>
										HUSH
									</p>
								</div>
								<div
										data-v-7affce21=""
										class="leading-[14vw] flex-3 ml-[4vw] text-[2.43vw]"
								>
									<span data-v-7affce21="" class="text-[#FF3836]">霸榜</span>
								</div>
							</div>
						</div>
					</li>
					<li
							data-v-7affce21=""
							class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]"
					>
						<div data-v-7affce21="" class="flex">
							<img
									data-v-7affce21=""
									src="http://p1.music.126.net/dzSZAgIjIYJ3iLqFfKrrlQ==/109951169510761055.jpg"
									alt=""
									class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5"
							/>
							<div
									data-v-7affce21=""
									class="flex-1 ml-[1vw] flex items-center pr-[5.7vw] pl-[3.26vw]"
							>
								<div
										data-v-7affce21=""
										class="leading-[14vw] font-[800] flex-3 mr-[3vw] text-[#CD8354] text-[2.8vw]"
								>
									3
								</div>
								<div data-v-7affce21="" class="w-[40vw]">
									<h4
											data-v-7affce21=""
											class="dark:text-[#ebeaf0] text-[3.5vw] text-[#3E465B] text-ellipsis overflow-hidden whitespace-nowrap w-[40vw]"
									>
										Fortnight
									</h4>
									<p
											data-v-7affce21=""
											class="dark:text-[#a5a7ae] text-[2.36vw] text-[#79838F]"
									>
										Taylor Swift
									</p>
								</div>
								<div
										data-v-7affce21=""
										class="leading-[14vw] flex-3 ml-[4vw] text-[2.43vw]"
								>
									<span data-v-7affce21="" class="text-[#FF3836]">霸榜</span>
								</div>
							</div>
						</div>
					</li>
				</ul>
				<ul
						data-v-7affce21=""
						class="ml-[2vw] dark:bg-[#25272e] dark:bg-gradient-n dark:from-000 dark:via-000 dark:to-000 shadows w-[88vw] scroll-item bg-[#fff] mr-[2vw] rounded-[10px] pt-[4vw] pb-[3.8vw] bg-gradient-to from-ff8177 via-ff8c7f to-b12a5b mb-[2vw]"
				>
					<li
							data-v-7affce21=""
							class="pl-[2vw] w-[88vw] scroll-content pr-[5vw]"
					>
						<div
								data-v-7affce21=""
								class="flex justify-between items-center h-[12vw]"
						>
							<div data-v-7affce21="" class="flex items-center">
                <span
		                data-v-7affce21=""
		                class="dark:text-[#e6e6e9] text-[#374d5b] text-[4vw] font-[800]"
                >星云榜</span
                >
								<svg
										data-v-7affce21=""
										xmlns="http://www.w3.org/2000/svg"
										xmlns:xlink="http://www.w3.org/1999/xlink"
										aria-hidden="true"
										role="img"
										width="1em"
										height="1em"
										viewBox="0 0 24 24"
										class="dark:text-[#e6e6e9] font-[800] text-[#3d475b] iconify iconify--mingcute"
								>
									<g fill="none" fill-rule="evenodd">
										<path
												d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
										></path>
										<path
												fill="currentColor"
												d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
										></path>
									</g>
								</svg>
							</div>
							<span
									data-v-7affce21=""
									class="dark:text-[#8e9097] text-[#939BA1]"
							>精选宝藏新歌</span
							>
						</div>
					</li>
					<li
							data-v-7affce21=""
							class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]"
					>
						<div data-v-7affce21="" class="flex">
							<img
									data-v-7affce21=""
									src="http://p1.music.126.net/4-ihqWsiRaKVB9uQUIwQrQ==/109951169510771909.jpg"
									alt=""
									class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5"
							/>
							<div
									data-v-7affce21=""
									class="flex-1 ml-[1vw] flex items-center pr-[5.7vw] pl-[3.26vw]"
							>
								<div
										data-v-7affce21=""
										class="leading-[14vw] font-[800] flex-3 mr-[3vw] text-[#C28E28] text-[2.8vw]"
								>
									1
								</div>
								<div data-v-7affce21="" class="w-[40vw]">
									<h4
											data-v-7affce21=""
											class="dark:text-[#ebeaf0] text-[3.5vw] text-[#3E465B] text-ellipsis overflow-hidden whitespace-nowrap w-[40vw]"
									>
										罗马
									</h4>
									<p
											data-v-7affce21=""
											class="dark:text-[#a5a7ae] text-[2.36vw] text-[#79838F]"
									>
										杨和苏KeyNG
									</p>
								</div>
								<div
										data-v-7affce21=""
										class="leading-[14vw] flex-3 ml-[4vw] text-[2.43vw]"
								>
									<span data-v-7affce21="" class="text-[#FF3836]">霸榜</span>
								</div>
							</div>
						</div>
					</li>
					<li
							data-v-7affce21=""
							class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]"
					>
						<div data-v-7affce21="" class="flex">
							<img
									data-v-7affce21=""
									src="http://p1.music.126.net/sDCM9NWkp1-MtLGsKvQOqw==/109951169501813454.jpg"
									alt=""
									class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5"
							/>
							<div
									data-v-7affce21=""
									class="flex-1 ml-[1vw] flex items-center pr-[5.7vw] pl-[3.26vw]"
							>
								<div
										data-v-7affce21=""
										class="leading-[14vw] font-[800] flex-3 mr-[3vw] text-[#818AAC] text-[2.8vw]"
								>
									2
								</div>
								<div data-v-7affce21="" class="w-[40vw]">
									<h4
											data-v-7affce21=""
											class="dark:text-[#ebeaf0] text-[3.5vw] text-[#3E465B] text-ellipsis overflow-hidden whitespace-nowrap w-[40vw]"
									>
										我在原地等你
									</h4>
									<p
											data-v-7affce21=""
											class="dark:text-[#a5a7ae] text-[2.36vw] text-[#79838F]"
									>
										HUSH
									</p>
								</div>
								<div
										data-v-7affce21=""
										class="leading-[14vw] flex-3 ml-[4vw] text-[2.43vw]"
								>
									<span data-v-7affce21="" class="text-[#FF3836]">霸榜</span>
								</div>
							</div>
						</div>
					</li>
					<li
							data-v-7affce21=""
							class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]"
					>
						<div data-v-7affce21="" class="flex">
							<img
									data-v-7affce21=""
									src="http://p1.music.126.net/dzSZAgIjIYJ3iLqFfKrrlQ==/109951169510761055.jpg"
									alt=""
									class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5"
							/>
							<div
									data-v-7affce21=""
									class="flex-1 ml-[1vw] flex items-center pr-[5.7vw] pl-[3.26vw]"
							>
								<div
										data-v-7affce21=""
										class="leading-[14vw] font-[800] flex-3 mr-[3vw] text-[#CD8354] text-[2.8vw]"
								>
									3
								</div>
								<div data-v-7affce21="" class="w-[40vw]">
									<h4
											data-v-7affce21=""
											class="dark:text-[#ebeaf0] text-[3.5vw] text-[#3E465B] text-ellipsis overflow-hidden whitespace-nowrap w-[40vw]"
									>
										Fortnight
									</h4>
									<p
											data-v-7affce21=""
											class="dark:text-[#a5a7ae] text-[2.36vw] text-[#79838F]"
									>
										Taylor Swift
									</p>
								</div>
								<div
										data-v-7affce21=""
										class="leading-[14vw] flex-3 ml-[4vw] text-[2.43vw]"
								>
									<span data-v-7affce21="" class="text-[#FF3836]">霸榜</span>
								</div>
							</div>
						</div>
					</li>
				</ul>
				<ul
						data-v-7affce21=""
						class="ml-[2vw] dark:bg-[#25272e] dark:bg-gradient-n dark:from-000 dark:via-000 dark:to-000 shadows w-[88vw] scroll-item bg-[#fff] mr-[2vw] rounded-[10px] pt-[4vw] pb-[3.8vw] bg-gradient-to from-ff8177 via-ff8c7f to-b12a5b mb-[2vw]"
				>
					<li
							data-v-7affce21=""
							class="pl-[2vw] w-[88vw] scroll-content pr-[5vw]"
					>
						<div
								data-v-7affce21=""
								class="flex justify-between items-center h-[12vw]"
						>
							<div data-v-7affce21="" class="flex items-center">
                <span
		                data-v-7affce21=""
		                class="dark:text-[#e6e6e9] text-[#374d5b] text-[4vw] font-[800]"
                >热歌榜</span
                >
								<svg
										data-v-7affce21=""
										xmlns="http://www.w3.org/2000/svg"
										xmlns:xlink="http://www.w3.org/1999/xlink"
										aria-hidden="true"
										role="img"
										width="1em"
										height="1em"
										viewBox="0 0 24 24"
										class="dark:text-[#e6e6e9] font-[800] text-[#3d475b] iconify iconify--mingcute"
								>
									<g fill="none" fill-rule="evenodd">
										<path
												d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
										></path>
										<path
												fill="currentColor"
												d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
										></path>
									</g>
								</svg>
							</div>
							<span
									data-v-7affce21=""
									class="dark:text-[#8e9097] text-[#939BA1]"
							>云村用户都在听</span
							>
						</div>
					</li>
					<li
							data-v-7affce21=""
							class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]"
					>
						<div data-v-7affce21="" class="flex">
							<img
									data-v-7affce21=""
									src="http://p1.music.126.net/kGdzpMO7C-8ERTcwymW4sA==/109951169315856070.jpg"
									alt=""
									class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5"
							/>
							<div
									data-v-7affce21=""
									class="flex-1 ml-[1vw] flex items-center pr-[5.7vw] pl-[3.26vw]"
							>
								<div
										data-v-7affce21=""
										class="leading-[14vw] font-[800] flex-3 mr-[3vw] text-[#C28E28] text-[2.8vw]"
								>
									1
								</div>
								<div data-v-7affce21="" class="w-[40vw]">
									<h4
											data-v-7affce21=""
											class="dark:text-[#ebeaf0] text-[3.5vw] text-[#3E465B] text-ellipsis overflow-hidden whitespace-nowrap w-[40vw]"
									>
										如果爱忘了 (live)
									</h4>
									<p
											data-v-7affce21=""
											class="dark:text-[#a5a7ae] text-[2.36vw] text-[#79838F]"
									>
										汪苏泷
									</p>
								</div>
								<div
										data-v-7affce21=""
										class="leading-[14vw] flex-3 ml-[4vw] text-[2.43vw]"
								>
									<span data-v-7affce21="" class="text-[#FF3836]">霸榜</span>
								</div>
							</div>
						</div>
					</li>
					<li
							data-v-7affce21=""
							class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]"
					>
						<div data-v-7affce21="" class="flex">
							<img
									data-v-7affce21=""
									src="http://p1.music.126.net/9FhSEQtMhP-JP3_U84YfWQ==/109951165798773745.jpg"
									alt=""
									class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5"
							/>
							<div
									data-v-7affce21=""
									class="flex-1 ml-[1vw] flex items-center pr-[5.7vw] pl-[3.26vw]"
							>
								<div
										data-v-7affce21=""
										class="leading-[14vw] font-[800] flex-3 mr-[3vw] text-[#818AAC] text-[2.8vw]"
								>
									2
								</div>
								<div data-v-7affce21="" class="w-[40vw]">
									<h4
											data-v-7affce21=""
											class="dark:text-[#ebeaf0] text-[3.5vw] text-[#3E465B] text-ellipsis overflow-hidden whitespace-nowrap w-[40vw]"
									>
										还是会想你
									</h4>
									<p
											data-v-7affce21=""
											class="dark:text-[#a5a7ae] text-[2.36vw] text-[#79838F]"
									>
										林达浪
									</p>
								</div>
								<div
										data-v-7affce21=""
										class="leading-[14vw] flex-3 ml-[4vw] text-[2.43vw]"
								>
									<span data-v-7affce21="" class="text-[#FF3836]">霸榜</span>
								</div>
							</div>
						</div>
					</li>
					<li
							data-v-7affce21=""
							class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]"
					>
						<div data-v-7affce21="" class="flex">
							<img
									data-v-7affce21=""
									src="http://p1.music.126.net/RjiI9yP2Fnxx5cxiTVCIrQ==/109951169318905148.jpg"
									alt=""
									class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5"
							/>
							<div
									data-v-7affce21=""
									class="flex-1 ml-[1vw] flex items-center pr-[5.7vw] pl-[3.26vw]"
							>
								<div
										data-v-7affce21=""
										class="leading-[14vw] font-[800] flex-3 mr-[3vw] text-[#CD8354] text-[2.8vw]"
								>
									3
								</div>
								<div data-v-7affce21="" class="w-[40vw]">
									<h4
											data-v-7affce21=""
											class="dark:text-[#ebeaf0] text-[3.5vw] text-[#3E465B] text-ellipsis overflow-hidden whitespace-nowrap w-[40vw]"
									>
										5:20AM
									</h4>
									<p
											data-v-7affce21=""
											class="dark:text-[#a5a7ae] text-[2.36vw] text-[#79838F]"
									>
										刀酱
									</p>
								</div>
								<div
										data-v-7affce21=""
										class="leading-[14vw] flex-3 ml-[4vw] text-[2.43vw]"
								>
									<span data-v-7affce21="" class="text-[#FF3836]">霸榜</span>
								</div>
							</div>
						</div>
					</li>
				</ul>
				<ul
						data-v-7affce21=""
						class="ml-[2vw] dark:bg-[#25272e] dark:bg-gradient-n dark:from-000 dark:via-000 dark:to-000 shadows w-[88vw] scroll-item bg-[#fff] mr-[2vw] rounded-[10px] pt-[4vw] pb-[3.8vw] bg-gradient-to from-ff8177 via-ff8c7f to-b12a5b mb-[2vw]"
				>
					<li
							data-v-7affce21=""
							class="pl-[2vw] w-[88vw] scroll-content pr-[5vw]"
					>
						<div
								data-v-7affce21=""
								class="flex justify-between items-center h-[12vw]"
						>
							<div data-v-7affce21="" class="flex items-center">
                <span
		                data-v-7affce21=""
		                class="dark:text-[#e6e6e9] text-[#374d5b] text-[4vw] font-[800]"
                >原创榜</span
                >
								<svg
										data-v-7affce21=""
										xmlns="http://www.w3.org/2000/svg"
										xmlns:xlink="http://www.w3.org/1999/xlink"
										aria-hidden="true"
										role="img"
										width="1em"
										height="1em"
										viewBox="0 0 24 24"
										class="dark:text-[#e6e6e9] font-[800] text-[#3d475b] iconify iconify--mingcute"
								>
									<g fill="none" fill-rule="evenodd">
										<path
												d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
										></path>
										<path
												fill="currentColor"
												d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
										></path>
									</g>
								</svg>
							</div>
							<span
									data-v-7affce21=""
									class="dark:text-[#8e9097] text-[#939BA1]"
							>最佳独立原创音乐</span
							>
						</div>
					</li>
					<li
							data-v-7affce21=""
							class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]"
					>
						<div data-v-7affce21="" class="flex">
							<img
									data-v-7affce21=""
									src="http://p1.music.126.net/DER95M8-BNOR2LEydXb83g==/109951169534547973.jpg"
									alt=""
									class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5"
							/>
							<div
									data-v-7affce21=""
									class="flex-1 ml-[1vw] flex items-center pr-[5.7vw] pl-[3.26vw]"
							>
								<div
										data-v-7affce21=""
										class="leading-[14vw] font-[800] flex-3 mr-[3vw] text-[#C28E28] text-[2.8vw]"
								>
									1
								</div>
								<div data-v-7affce21="" class="w-[40vw]">
									<h4
											data-v-7affce21=""
											class="dark:text-[#ebeaf0] text-[3.5vw] text-[#3E465B] text-ellipsis overflow-hidden whitespace-nowrap w-[40vw]"
									>
										Next Story
									</h4>
									<p
											data-v-7affce21=""
											class="dark:text-[#a5a7ae] text-[2.36vw] text-[#79838F]"
									>
										NINEONE#乃万
									</p>
								</div>
								<div
										data-v-7affce21=""
										class="leading-[14vw] flex-3 ml-[4vw] text-[2.43vw]"
								>
									<span data-v-7affce21="" class="text-[#FF3836]">热门</span>
								</div>
							</div>
						</div>
					</li>
					<li
							data-v-7affce21=""
							class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]"
					>
						<div data-v-7affce21="" class="flex">
							<img
									data-v-7affce21=""
									src="http://p1.music.126.net/S00wuLgzLy_DHqetZq-0Xw==/109951169545652819.jpg"
									alt=""
									class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5"
							/>
							<div
									data-v-7affce21=""
									class="flex-1 ml-[1vw] flex items-center pr-[5.7vw] pl-[3.26vw]"
							>
								<div
										data-v-7affce21=""
										class="leading-[14vw] font-[800] flex-3 mr-[3vw] text-[#818AAC] text-[2.8vw]"
								>
									2
								</div>
								<div data-v-7affce21="" class="w-[40vw]">
									<h4
											data-v-7affce21=""
											class="dark:text-[#ebeaf0] text-[3.5vw] text-[#3E465B] text-ellipsis overflow-hidden whitespace-nowrap w-[40vw]"
									>
										青春当入樽 Streetball Boy
									</h4>
									<p
											data-v-7affce21=""
											class="dark:text-[#a5a7ae] text-[2.36vw] text-[#79838F]"
									>
										royster lee
									</p>
								</div>
								<div
										data-v-7affce21=""
										class="leading-[14vw] flex-3 ml-[4vw] text-[2.43vw]"
								>
									<span data-v-7affce21="" class="text-[#39B184]">新晋</span>
								</div>
							</div>
						</div>
					</li>
					<li
							data-v-7affce21=""
							class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]"
					>
						<div data-v-7affce21="" class="flex">
							<img
									data-v-7affce21=""
									src="http://p1.music.126.net/6xdtFb9MpuBsqd73mYThDA==/109951169541563639.jpg"
									alt=""
									class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5"
							/>
							<div
									data-v-7affce21=""
									class="flex-1 ml-[1vw] flex items-center pr-[5.7vw] pl-[3.26vw]"
							>
								<div
										data-v-7affce21=""
										class="leading-[14vw] font-[800] flex-3 mr-[3vw] text-[#CD8354] text-[2.8vw]"
								>
									3
								</div>
								<div data-v-7affce21="" class="w-[40vw]">
									<h4
											data-v-7affce21=""
											class="dark:text-[#ebeaf0] text-[3.5vw] text-[#3E465B] text-ellipsis overflow-hidden whitespace-nowrap w-[40vw]"
									>
										再见
									</h4>
									<p
											data-v-7affce21=""
											class="dark:text-[#a5a7ae] text-[2.36vw] text-[#79838F]"
									>
										h3R3
									</p>
								</div>
								<div
										data-v-7affce21=""
										class="leading-[14vw] flex-3 ml-[4vw] text-[2.43vw]"
								>
									<span data-v-7affce21="" class="text-[#39B184]">新晋</span>
								</div>
							</div>
						</div>
					</li>
				</ul>
				<ul
						data-v-7affce21=""
						class="ml-[2vw] dark:bg-[#25272e] dark:bg-gradient-n dark:from-000 dark:via-000 dark:to-000 shadows w-[88vw] scroll-item bg-[#fff] mr-[2vw] rounded-[10px] pt-[4vw] pb-[3.8vw] bg-gradient-to from-ff8177 via-ff8c7f to-b12a5b mb-[2vw]"
				>
					<li
							data-v-7affce21=""
							class="pl-[2vw] w-[88vw] scroll-content pr-[5vw]"
					>
						<div
								data-v-7affce21=""
								class="flex justify-between items-center h-[12vw]"
						>
							<div data-v-7affce21="" class="flex items-center">
                <span
		                data-v-7affce21=""
		                class="dark:text-[#e6e6e9] text-[#374d5b] text-[4vw] font-[800]"
                >网络热歌榜</span
                >
								<svg
										data-v-7affce21=""
										xmlns="http://www.w3.org/2000/svg"
										xmlns:xlink="http://www.w3.org/1999/xlink"
										aria-hidden="true"
										role="img"
										width="1em"
										height="1em"
										viewBox="0 0 24 24"
										class="dark:text-[#e6e6e9] font-[800] text-[#3d475b] iconify iconify--mingcute"
								>
									<g fill="none" fill-rule="evenodd">
										<path
												d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
										></path>
										<path
												fill="currentColor"
												d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
										></path>
									</g>
								</svg>
							</div>
							<span
									data-v-7affce21=""
									class="dark:text-[#8e9097] text-[#939BA1]"
							>全网用户都在听</span
							>
						</div>
					</li>
					<li
							data-v-7affce21=""
							class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]"
					>
						<div data-v-7affce21="" class="flex">
							<img
									data-v-7affce21=""
									src="http://p1.music.126.net/9AP_AJLaACliGYpclAlz2g==/109951169534405328.jpg"
									alt=""
									class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5"
							/>
							<div
									data-v-7affce21=""
									class="flex-1 ml-[1vw] flex items-center pr-[5.7vw] pl-[3.26vw]"
							>
								<div
										data-v-7affce21=""
										class="leading-[14vw] font-[800] flex-3 mr-[3vw] text-[#C28E28] text-[2.8vw]"
								>
									1
								</div>
								<div data-v-7affce21="" class="w-[40vw]">
									<h4
											data-v-7affce21=""
											class="dark:text-[#ebeaf0] text-[3.5vw] text-[#3E465B] text-ellipsis overflow-hidden whitespace-nowrap w-[40vw]"
									>
										如果可以 (Live版)
									</h4>
									<p
											data-v-7affce21=""
											class="dark:text-[#a5a7ae] text-[2.36vw] text-[#79838F]"
									>
										汪苏泷
									</p>
								</div>
								<div
										data-v-7affce21=""
										class="leading-[14vw] flex-3 ml-[4vw] text-[2.43vw]"
								>
									<span data-v-7affce21="" class="text-[#FF3836]">热门</span>
								</div>
							</div>
						</div>
					</li>
					<li
							data-v-7affce21=""
							class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]"
					>
						<div data-v-7affce21="" class="flex">
							<img
									data-v-7affce21=""
									src="http://p1.music.126.net/VPNLn1n7R97SZih1Q3dzhg==/109951169395433314.jpg"
									alt=""
									class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5"
							/>
							<div
									data-v-7affce21=""
									class="flex-1 ml-[1vw] flex items-center pr-[5.7vw] pl-[3.26vw]"
							>
								<div
										data-v-7affce21=""
										class="leading-[14vw] font-[800] flex-3 mr-[3vw] text-[#818AAC] text-[2.8vw]"
								>
									2
								</div>
								<div data-v-7affce21="" class="w-[40vw]">
									<h4
											data-v-7affce21=""
											class="dark:text-[#ebeaf0] text-[3.5vw] text-[#3E465B] text-ellipsis overflow-hidden whitespace-nowrap w-[40vw]"
									>
										还是会想你
									</h4>
									<p
											data-v-7affce21=""
											class="dark:text-[#a5a7ae] text-[2.36vw] text-[#79838F]"
									>
										DJ铁柱
									</p>
								</div>
								<div
										data-v-7affce21=""
										class="leading-[14vw] flex-3 ml-[4vw] text-[2.43vw]"
								>
									<span data-v-7affce21="" class="text-[#39B184]">新晋</span>
								</div>
							</div>
						</div>
					</li>
					<li
							data-v-7affce21=""
							class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]"
					>
						<div data-v-7affce21="" class="flex">
							<img
									data-v-7affce21=""
									src="http://p1.music.126.net/9AP_AJLaACliGYpclAlz2g==/109951169534405328.jpg"
									alt=""
									class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5"
							/>
							<div
									data-v-7affce21=""
									class="flex-1 ml-[1vw] flex items-center pr-[5.7vw] pl-[3.26vw]"
							>
								<div
										data-v-7affce21=""
										class="leading-[14vw] font-[800] flex-3 mr-[3vw] text-[#CD8354] text-[2.8vw]"
								>
									3
								</div>
								<div data-v-7affce21="" class="w-[40vw]">
									<h4
											data-v-7affce21=""
											class="dark:text-[#ebeaf0] text-[3.5vw] text-[#3E465B] text-ellipsis overflow-hidden whitespace-nowrap w-[40vw]"
									>
										最后一页 (Live版)
									</h4>
									<p
											data-v-7affce21=""
											class="dark:text-[#a5a7ae] text-[2.36vw] text-[#79838F]"
									>
										王赫野
									</p>
								</div>
								<div
										data-v-7affce21=""
										class="leading-[14vw] flex-3 ml-[4vw] text-[2.43vw]"
								>
									<span data-v-7affce21="" class="text-[#39B184]">新晋</span>
								</div>
							</div>
						</div>
					</li>
				</ul>
				<ul
						data-v-7affce21=""
						class="ml-[2vw] dark:bg-[#25272e] dark:bg-gradient-n dark:from-000 dark:via-000 dark:to-000 shadows w-[88vw] scroll-item bg-[#fff] mr-[2vw] rounded-[10px] pt-[4vw] pb-[3.8vw] bg-gradient-to from-ff8177 via-ff8c7f to-b12a5b mb-[2vw]"
				>
					<li
							data-v-7affce21=""
							class="pl-[2vw] w-[88vw] scroll-content pr-[5vw]"
					>
						<div
								data-v-7affce21=""
								class="flex justify-between items-center h-[12vw]"
						>
							<div data-v-7affce21="" class="flex items-center">
                <span
		                data-v-7affce21=""
		                class="dark:text-[#e6e6e9] text-[#374d5b] text-[4vw] font-[800]"
                >MV榜</span
                >
								<svg
										data-v-7affce21=""
										xmlns="http://www.w3.org/2000/svg"
										xmlns:xlink="http://www.w3.org/1999/xlink"
										aria-hidden="true"
										role="img"
										width="1em"
										height="1em"
										viewBox="0 0 24 24"
										class="dark:text-[#e6e6e9] font-[800] text-[#3d475b] iconify iconify--mingcute"
								>
									<g fill="none" fill-rule="evenodd">
										<path
												d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
										></path>
										<path
												fill="currentColor"
												d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
										></path>
									</g>
								</svg>
							</div>
							<span
									data-v-7affce21=""
									class="dark:text-[#8e9097] text-[#939BA1]"
							>云村用户都在看</span
							>
						</div>
					</li>
					<li
							data-v-7affce21=""
							class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]"
					>
						<div data-v-7affce21="" class="flex">
							<img
									data-v-7affce21=""
									src="http://p1.music.126.net/EDRAklfw5xr3TBwSKwEZ4g==/109951169565098995.jpg"
									alt=""
									class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5"
							/>
							<div
									data-v-7affce21=""
									class="flex-1 ml-[1vw] flex items-center pr-[5.7vw] pl-[3.26vw]"
							>
								<div
										data-v-7affce21=""
										class="leading-[14vw] font-[800] flex-3 mr-[3vw] text-[#C28E28] text-[2.8vw]"
								>
									1
								</div>
								<div data-v-7affce21="" class="w-[40vw]">
									<h4
											data-v-7affce21=""
											class="dark:text-[#ebeaf0] text-[3.5vw] text-[#3E465B] text-ellipsis overflow-hidden whitespace-nowrap w-[40vw]"
									>
										那些我尚未知道的美丽
									</h4>
									<p
											data-v-7affce21=""
											class="dark:text-[#a5a7ae] text-[2.36vw] text-[#79838F]"
									></p>
								</div>
								<div
										data-v-7affce21=""
										class="leading-[14vw] flex-3 ml-[4vw] text-[2.43vw]"
								>
									<span data-v-7affce21="" class="text-[#FF3836]">热门</span>
								</div>
							</div>
						</div>
					</li>
					<li
							data-v-7affce21=""
							class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]"
					>
						<div data-v-7affce21="" class="flex">
							<img
									data-v-7affce21=""
									src="http://p1.music.126.net/Gr4QMEy4Qzj2YsVpvkgUQw==/109951169566849685.jpg"
									alt=""
									class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5"
							/>
							<div
									data-v-7affce21=""
									class="flex-1 ml-[1vw] flex items-center pr-[5.7vw] pl-[3.26vw]"
							>
								<div
										data-v-7affce21=""
										class="leading-[14vw] font-[800] flex-3 mr-[3vw] text-[#818AAC] text-[2.8vw]"
								>
									2
								</div>
								<div data-v-7affce21="" class="w-[40vw]">
									<h4
											data-v-7affce21=""
											class="dark:text-[#ebeaf0] text-[3.5vw] text-[#3E465B] text-ellipsis overflow-hidden whitespace-nowrap w-[40vw]"
									>
										How I Shine MV
									</h4>
									<p
											data-v-7affce21=""
											class="dark:text-[#a5a7ae] text-[2.36vw] text-[#79838F]"
									></p>
								</div>
								<div
										data-v-7affce21=""
										class="leading-[14vw] flex-3 ml-[4vw] text-[2.43vw]"
								>
									<span data-v-7affce21="" class="text-[#39B184]">新晋</span>
								</div>
							</div>
						</div>
					</li>
					<li
							data-v-7affce21=""
							class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]"
					>
						<div data-v-7affce21="" class="flex">
							<img
									data-v-7affce21=""
									src="http://p1.music.126.net/n-3PwnRT7KZmQaHqSQ41mg==/109951169410645887.jpg"
									alt=""
									class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5"
							/>
							<div
									data-v-7affce21=""
									class="flex-1 ml-[1vw] flex items-center pr-[5.7vw] pl-[3.26vw]"
							>
								<div
										data-v-7affce21=""
										class="leading-[14vw] font-[800] flex-3 mr-[3vw] text-[#CD8354] text-[2.8vw]"
								>
									3
								</div>
								<div data-v-7affce21="" class="w-[40vw]">
									<h4
											data-v-7affce21=""
											class="dark:text-[#ebeaf0] text-[3.5vw] text-[#3E465B] text-ellipsis overflow-hidden whitespace-nowrap w-[40vw]"
									>
										若月亮没来 (若是月亮还没来)
									</h4>
									<p
											data-v-7affce21=""
											class="dark:text-[#a5a7ae] text-[2.36vw] text-[#79838F]"
									></p>
								</div>
								<div
										data-v-7affce21=""
										class="leading-[14vw] flex-3 ml-[4vw] text-[2.43vw]"
								>
									<span data-v-7affce21="" class="text-[#FF3836]">飙升</span>
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
			<div
					class="w-[330vw] flex mb-[6.31vw] scroll-content"
					style="transform: translateX(0px) translateY(0px) translateZ(1px)"
			>
				<div
						data-v-bdb6bc0e=""
						class="relative bg-[#9C9C9C] w-[68vw] h-[28vw] scroll-item rounded-[10px] py-[4vw] px-[3vw] mr-[2.83vw]"
						style="background-color: rgb(148, 148, 148)"
				>
					<h4
							data-v-bdb6bc0e=""
							class="text-[4vw] text-[#fff] flex items-center"
					>
						<svg
								data-v-bdb6bc0e=""
								xmlns="http://www.w3.org/2000/svg"
								xmlns:xlink="http://www.w3.org/1999/xlink"
								aria-hidden="true"
								role="img"
								width="4vw"
								height="4vw"
								viewBox="0 0 32 32"
								class="iconify iconify--raphael"
								style="color: rgb(255, 255, 255)"
						>
							<path
									fill="currentColor"
									d="M16 5.333c-7.732 0-14 4.7-14 10.5c0 1.982.74 3.833 2.016 5.414L2 25.667l5.613-1.44c2.34 1.316 5.237 2.106 8.387 2.106c7.732 0 14-4.7 14-10.5s-6.268-10.5-14-10.5"
							></path>
						</svg>
						与银河对视
					</h4>
					<p data-v-bdb6bc0e="" class="text-[2.6vw] text-[#D7D7D7]">
						484万热度
					</p>
					<p
							data-v-bdb6bc0e=""
							class="text-[2.6vw] text-[#fff] w-[42vw] text-ellipsis h-[10vw] overflow-hidden"
					>
						我们是宇宙中最浪漫的乘车客。
					</p>
					<img
							data-v-bdb6bc0e=""
							src="http://p1.music.126.net/k6s_BYKfQk38jSyEWWdQuA==/109951165474239956.jpg"
							alt=""
							class="w-[13.75vw] h-[13.75vw] rounded-[12px] absolute right-[2.9vw] bottom-[2.9vw]"
					/>
				</div>
				<div
						data-v-bdb6bc0e=""
						class="relative bg-[#9C9C9C] w-[68vw] h-[28vw] scroll-item rounded-[10px] py-[4vw] px-[3vw] mr-[2.83vw]"
						style="background-color: rgb(134, 133, 170)"
				>
					<h4
							data-v-bdb6bc0e=""
							class="text-[4vw] text-[#fff] flex items-center"
					>
						<svg
								data-v-bdb6bc0e=""
								xmlns="http://www.w3.org/2000/svg"
								xmlns:xlink="http://www.w3.org/1999/xlink"
								aria-hidden="true"
								role="img"
								width="4vw"
								height="4vw"
								viewBox="0 0 32 32"
								class="iconify iconify--raphael"
								style="color: rgb(255, 255, 255)"
						>
							<path
									fill="currentColor"
									d="M16 5.333c-7.732 0-14 4.7-14 10.5c0 1.982.74 3.833 2.016 5.414L2 25.667l5.613-1.44c2.34 1.316 5.237 2.106 8.387 2.106c7.732 0 14-4.7 14-10.5s-6.268-10.5-14-10.5"
							></path>
						</svg>
						心之所向是燕园
					</h4>
					<p data-v-bdb6bc0e="" class="text-[2.6vw] text-[#D7D7D7]">
						484万热度
					</p>
					<p
							data-v-bdb6bc0e=""
							class="text-[2.6vw] text-[#fff] w-[42vw] text-ellipsis h-[10vw] overflow-hidden"
					>
						2022高考/新高考一卷/历生政选手/拉文克劳六年级在读/记录我所热爱的
						“虽千万人，吾往矣” -永远热爱生活 -应当诗意地栖息在这大地上
						-对于文科：情不知所起，一往而深
						-希望能一直带着热爱，奔赴山海!祝你也祝我 / - 单纯记录 少更勿念
						私信选回 -平时记录学习app：番茄TODO/costudy 番茄自习室：CBCD3BF
						（ball ball you 进去了就好好用番茄学习好吗） ✐ ᵕ̈ 最后
						今天也别忘记加油哦！
					</p>
					<img
							data-v-bdb6bc0e=""
							src="http://p1.music.126.net/ucIkwjPrUZML6sdKrf2wSA==/109951164968211955.jpg"
							alt=""
							class="w-[13.75vw] h-[13.75vw] rounded-[12px] absolute right-[2.9vw] bottom-[2.9vw]"
					/>
				</div>
				<div
						data-v-bdb6bc0e=""
						class="relative bg-[#9C9C9C] w-[68vw] h-[28vw] scroll-item rounded-[10px] py-[4vw] px-[3vw] mr-[2.83vw]"
						style="background-color: rgb(174, 115, 78)"
				>
					<h4
							data-v-bdb6bc0e=""
							class="text-[4vw] text-[#fff] flex items-center"
					>
						<svg
								data-v-bdb6bc0e=""
								xmlns="http://www.w3.org/2000/svg"
								xmlns:xlink="http://www.w3.org/1999/xlink"
								aria-hidden="true"
								role="img"
								width="4vw"
								height="4vw"
								viewBox="0 0 32 32"
								class="iconify iconify--raphael"
								style="color: rgb(255, 255, 255)"
						>
							<path
									fill="currentColor"
									d="M16 5.333c-7.732 0-14 4.7-14 10.5c0 1.982.74 3.833 2.016 5.414L2 25.667l5.613-1.44c2.34 1.316 5.237 2.106 8.387 2.106c7.732 0 14-4.7 14-10.5s-6.268-10.5-14-10.5"
							></path>
						</svg>
						miiiiissu
					</h4>
					<p data-v-bdb6bc0e="" class="text-[2.6vw] text-[#D7D7D7]">
						484万热度
					</p>
					<p
							data-v-bdb6bc0e=""
							class="text-[2.6vw] text-[#fff] w-[42vw] text-ellipsis h-[10vw] overflow-hidden"
					>
						走进我的影子
					</p>
					<img
							data-v-bdb6bc0e=""
							src="http://p1.music.126.net/ry9x6JKkhzzbVYXsgUrTGg==/109951169349655479.jpg"
							alt=""
							class="w-[13.75vw] h-[13.75vw] rounded-[12px] absolute right-[2.9vw] bottom-[2.9vw]"
					/>
				</div>
				<div
						data-v-bdb6bc0e=""
						class="relative bg-[#9C9C9C] w-[68vw] h-[28vw] scroll-item rounded-[10px] py-[4vw] px-[3vw] mr-[2.83vw]"
						style="background-color: rgb(148, 148, 148)"
				>
					<h4
							data-v-bdb6bc0e=""
							class="text-[4vw] text-[#fff] flex items-center"
					>
						<svg
								data-v-bdb6bc0e=""
								xmlns="http://www.w3.org/2000/svg"
								xmlns:xlink="http://www.w3.org/1999/xlink"
								aria-hidden="true"
								role="img"
								width="4vw"
								height="4vw"
								viewBox="0 0 32 32"
								class="iconify iconify--raphael"
								style="color: rgb(255, 255, 255)"
						>
							<path
									fill="currentColor"
									d="M16 5.333c-7.732 0-14 4.7-14 10.5c0 1.982.74 3.833 2.016 5.414L2 25.667l5.613-1.44c2.34 1.316 5.237 2.106 8.387 2.106c7.732 0 14-4.7 14-10.5s-6.268-10.5-14-10.5"
							></path>
						</svg>
						耳機听什麼歌
					</h4>
					<p data-v-bdb6bc0e="" class="text-[2.6vw] text-[#D7D7D7]">
						484万热度
					</p>
					<p
							data-v-bdb6bc0e=""
							class="text-[2.6vw] text-[#fff] w-[42vw] text-ellipsis h-[10vw] overflow-hidden"
					></p>
					<img
							data-v-bdb6bc0e=""
							src="http://p1.music.126.net/2JwuGEfXiWwXyEU3npa7Tg==/109951168538329448.jpg"
							alt=""
							class="w-[13.75vw] h-[13.75vw] rounded-[12px] absolute right-[2.9vw] bottom-[2.9vw]"
					/>
				</div>
				<div
						data-v-bdb6bc0e=""
						class="relative bg-[#9C9C9C] w-[68vw] h-[28vw] scroll-item rounded-[10px] py-[4vw] px-[3vw] mr-[2.83vw]"
						style="background-color: rgb(134, 133, 170)"
				>
					<h4
							data-v-bdb6bc0e=""
							class="text-[4vw] text-[#fff] flex items-center"
					>
						<svg
								data-v-bdb6bc0e=""
								xmlns="http://www.w3.org/2000/svg"
								xmlns:xlink="http://www.w3.org/1999/xlink"
								aria-hidden="true"
								role="img"
								width="4vw"
								height="4vw"
								viewBox="0 0 32 32"
								class="iconify iconify--raphael"
								style="color: rgb(255, 255, 255)"
						>
							<path
									fill="currentColor"
									d="M16 5.333c-7.732 0-14 4.7-14 10.5c0 1.982.74 3.833 2.016 5.414L2 25.667l5.613-1.44c2.34 1.316 5.237 2.106 8.387 2.106c7.732 0 14-4.7 14-10.5s-6.268-10.5-14-10.5"
							></path>
						</svg>
						到十九号房间去
					</h4>
					<p data-v-bdb6bc0e="" class="text-[2.6vw] text-[#D7D7D7]">
						484万热度
					</p>
					<p
							data-v-bdb6bc0e=""
							class="text-[2.6vw] text-[#fff] w-[42vw] text-ellipsis h-[10vw] overflow-hidden"
					>
						置顶我的感受
					</p>
					<img
							data-v-bdb6bc0e=""
							src="http://p1.music.126.net/vXK5THvOI32BoEt5LedRpw==/109951169303990223.jpg"
							alt=""
							class="w-[13.75vw] h-[13.75vw] rounded-[12px] absolute right-[2.9vw] bottom-[2.9vw]"
					/>
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
		<div
				class="w-[91vw] pt-[1vw] ml-[2vw] overflow-hidden scroll-wrapper border-[#EBEDF2]"
		>
			<div class="scroll-content flex w-[540vw] mb-[6.31vw]">
				<ul
						class="dark:bg-[#25272e] w-[91vw] scroll-item shadows bg-[#fff] mr-[2vw] rounded-[10px] px-[4vw] pt-[4vw] pb-[3.8vw]"
				>
					<li class="flex mt-[3vw]">
						<div class="flex-1">
							<p class="dark:text-[#ebeaf0] text-[2.72vw] text-[#AAADB5]">
								5/8
							</p>
							<div class="dark:text-[#a5a7ae] text-[3.68vw] text-[#3E4558]">
								도경수 (D.O.)的专辑：성장 - THE 3RD MINI ALBUM
							</div>
						</div>
						<div class="flex-4">
							<img
									src="http://p1.music.126.net/ncJi2E3bplaWTS02FM-nbw==/109951169566812138.jpg"
									alt=""
									class="w-[15vw] h-[15vw] rounded-[10px]"
							/>
						</div>
					</li>
					<li class="flex mt-[3vw]">
						<div class="flex-1">
							<p class="dark:text-[#ebeaf0] text-[2.72vw] text-[#AAADB5]">
								5/8
							</p>
							<div class="dark:text-[#a5a7ae] text-[3.68vw] text-[#3E4558]">
								炸药的专辑：比李景亮爷们的男人
							</div>
						</div>
						<div class="flex-4">
							<img
									src="http://p1.music.126.net/5n3WgS15icMBqug_PWnNgA==/109951169569727073.jpg"
									alt=""
									class="w-[15vw] h-[15vw] rounded-[10px]"
							/>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div
				class="bg-[#fff] fixed z-[3] van-hairline--top-bottom van-tabbar van-tabbar--fixed"
		>
			<div class="van-tabbar-item van-tabbar-item--active">
				<div class="van-tabbar-item__icon">
					<svg
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							aria-hidden="true"
							role="img"
							width="1em"
							height="1em"
							viewBox="0 0 24 24"
							class="iconify iconify--ri"
					>
						<path
								fill="currentColor"
								d="M12.001 22c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10m-1.086-10.432c.24-.84 1.075-1.541 1.99-1.648c.187.694.388 1.373.545 2.063c.053.23.037.495-.018.727c-.213.892-1.248 1.242-1.978.685c-.53-.405-.742-1.12-.539-1.827m3.817-.197c-.125-.465-.256-.927-.393-1.42c.5.13.907.36 1.255.697c1.257 1.222 1.385 3.3.294 4.732c-1.135 1.49-3.155 2.134-5.028 1.605c-2.302-.65-3.808-2.952-3.441-5.316c.274-1.768 1.27-3.004 2.9-3.733c.407-.182.58-.56.42-.93c-.157-.364-.54-.504-.944-.343c-2.721 1.088-4.32 4.134-3.67 6.987c.713 3.118 3.495 5.163 6.675 4.859c1.732-.166 3.164-.948 4.216-2.347c1.506-2.002 1.297-4.783-.463-6.499c-.666-.65-1.471-1.018-2.39-1.153c-.083-.013-.217-.052-.232-.106c-.087-.313-.18-.632-.206-.954c-.029-.357.29-.64.65-.645c.253-.003.434.13.603.3c.303.3.704.322.988.062c.29-.264.296-.678.018-1.008c-.566-.672-1.586-.891-2.43-.523c-.847.37-1.321 1.187-1.2 2.093c.038.28.11.557.167.842l-.26.072a3.863 3.863 0 0 0-2.098 1.414c-.921 1.22-.936 2.828-.041 3.947c1.274 1.594 3.747 1.284 4.523-.568c.284-.677.275-1.368.087-2.065"
						></path></svg
					><!---->
				</div>
				<div class="van-tabbar-item__text">首页</div>
			</div>
			<div class="van-tabbar-item">
				<div class="van-tabbar-item__icon">
					<svg
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							aria-hidden="true"
							role="img"
							width="1em"
							height="1em"
							viewBox="0 0 512 512"
							class="iconify iconify--ion"
					>
						<path
								fill="currentColor"
								d="M160 32h192v448H160zm224 160h112v288H384zM16 128h112v352H16z"
						></path></svg
					><!---->
				</div>
				<div class="van-tabbar-item__text">排行榜</div>
			</div>
			<div class="van-tabbar-item">
				<div class="van-tabbar-item__icon">
					<svg
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							aria-hidden="true"
							role="img"
							width="1em"
							height="1em"
							viewBox="0 0 24 24"
							class="iconify iconify--mingcute"
					>
						<g fill="none">
							<path
									d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
							></path>
							<path
									fill="currentColor"
									d="M21 5.18V17a4 4 0 1 1-2-3.465V9.181L9 10.847V18c0 .06-.005.117-.015.174A3.5 3.5 0 1 1 7 15.337v-8.49a2 2 0 0 1 1.671-1.973l10-1.666A2 2 0 0 1 21 5.18M5.5 17a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M17 15a2 2 0 1 0 0 4a2 2 0 0 0 0-4m2-9.82L9 6.847V8.82l10-1.667z"
							></path>
						</g></svg
					><!---->
				</div>
				<div class="van-tabbar-item__text">我的</div>
			</div>
			<div class="van-tabbar-item">
				<div class="van-tabbar-item__icon">
					<svg
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							aria-hidden="true"
							role="img"
							width="1em"
							height="1em"
							viewBox="0 0 24 24"
							class="iconify iconify--iconoir"
					>
						<g
								fill="none"
								stroke="currentColor"
								stroke-linejoin="round"
								stroke-width="1.5"
						>
							<path
									stroke-linecap="round"
									d="M12 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8"
							></path>
							<path
									d="M22 17.28a2.28 2.28 0 0 1-.662 1.606c-.976.984-1.923 2.01-2.936 2.958a.597.597 0 0 1-.823-.017l-2.918-2.94a2.28 2.28 0 0 1 0-3.214a2.277 2.277 0 0 1 3.233 0l.106.107l.106-.107A2.277 2.277 0 0 1 22 17.28Z"
							></path>
							<path
									stroke-linecap="round"
									d="M5 20v-1a7 7 0 0 1 10-6.326"
							></path>
						</g></svg
					><!---->
				</div>
				<div class="van-tabbar-item__text">关注</div>
			</div>
			<div class="van-tabbar-item">
				<div class="van-tabbar-item__icon">
					<svg
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							aria-hidden="true"
							role="img"
							width="1em"
							height="1em"
							viewBox="0 0 256 256"
							class="iconify iconify--ph"
					>
						<path
								fill="currentColor"
								d="M144 140a12 12 0 1 1-12-12a12 12 0 0 1 12 12m44-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12m51.34 83.47a16 16 0 0 1-19.87 19.87l-24.71-7.27a80 80 0 0 1-108.33-40.65a79 79 0 0 1-25.19-7.35l-24.71 7.27a16 16 0 0 1-19.87-19.87l7.27-24.71a80 80 0 1 1 145.65-66.17a80 80 0 0 1 62.49 114.17ZM81.3 166.3a79.94 79.94 0 0 1 70.38-93.87a64 64 0 0 0-112.13 61.76a8 8 0 0 1 .63 6L32 168l27.76-8.17a8 8 0 0 1 6 .63a63.5 63.5 0 0 0 15.54 5.84m135.15 15.89a64 64 0 1 0-26.26 26.26a8 8 0 0 1 6-.63L224 216l-8.17-27.76a8 8 0 0 1 .62-6.05"
						></path></svg
					><!---->
				</div>
				<div class="van-tabbar-item__text">社区</div>
			</div>
		</div>
	</template>
	<script>
	import { ref } from 'vue';
	import { useRouter } from 'vue-router';
	import { getHomePageData, getDragonball } from '../service';
	import BetterScroll from '../components/BetterScroll.vue';
	export default {
		components: { BetterScroll },
		setup() {
			const router = useRouter();
			const handleClick = () => {
				// 跳转到指定的路由
				router.push('/Search');
			};
			const open = ref(false);
			const afterOpenChange = bool => {
				console.log('open', bool);
			};
			const showDrawer = () => {
				open.value = true;
			};
			const homepageData = ref({});
			const homepageDragonball = ref([]);
			(async () => {
				try {
					homepageData.value = (await getHomePageData()).data.data.blocks;
					homepageDragonball.value = (await getDragonball()).data.data;
					console.log(homepageData.value);
					console.log(homepageDragonball.value);
				} catch (error) {
					console.log(error);
				}
			})();
			return { homepageData, homepageDragonball,open,showDrawer,afterOpenChange,handleClick,router};
		},
	};
	</script>
	<style>
	</style>

