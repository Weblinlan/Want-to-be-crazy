<template>
	<div class="">
		<div data-v-1247116c="" class="bg-[#FDFBFC] h-[100vh] pb-[12vw]">
			<div
					data-v-1247116c=""
					class="flex h-[19vw] items-center justify-between px-[5.5vw]"
			>
				<svg
						data-v-1247116c=""
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						aria-hidden="true"
						role="img"
						width="0.44em"
						height="1em"
						viewBox="0 0 7 16"
						class="text-[6vw] iconify iconify--formkit"
				>
					<path
							fill="currentColor"
							d="M5.5 13a.47.47 0 0 1-.35-.15l-4.5-4.5c-.2-.2-.2-.51 0-.71l4.5-4.49c.2-.2.51-.2.71 0s.2.51 0 .71L1.71 8l4.15 4.15c.2.2.2.51 0 .71c-.1.1-.23.15-.35.15Z"
					></path>
				</svg>
				<div data-v-1247116c="" class="text-[4vw] text-[#696969]">游客登录</div>
			</div>
			<img
					data-v-1247116c=""
					src="/static/logo.fill.svg"
					alt=""
					class="w-[38vw] mx-auto mt-[7vw] mb-[9vw]"
			/>
			<div data-v-1247116c="" class="relative">
				<img
						data-v-1247116c=""
						src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAYAAAA9zQYyAAAAAklEQVR4AewaftIAAAddSURBVO3BQY4cy5LAQDLQ978yR7vxVQKJqtbTD7iZ/cFalzisdZHDWhc5rHWRw1oXOax1kcNaFzmsdZHDWhc5rHWRw1oXOax1kcNaFzmsdZHDWhc5rHWRHz6k8jdVTCpTxaQyVUwqU8UTlaniicpUMam8UTGpTBWTylTxhsrfVPGJw1oXOax1kcNaF/nhyyq+SeUNlaliUnmiMlVMFU9Unqh8QmWqmFSmim+q+CaVbzqsdZHDWhc5rHWRH36ZyhsVb1RMKt+kMlVMKlPFpDJVTCpTxROVT6g8qXhD5Y2K33RY6yKHtS5yWOsiP/yPU5kqJpVPVDypmFSmikllqniiMlVMKuv/Hda6yGGtixzWusgP/+MqJpWpYlKZKn6Tyicq3qh4o+Imh7UucljrIoe1LvLDL6v4l6k8qXiiMlU8UZlUpopJZap4ojJVTBXfVPEvOax1kcNaFzmsdZEfvkzlb1KZKiaVqWJSmSomlaniDZWpYlL5popJZaqYVKaKJyr/ssNaFzmsdZHDWhf54UMV/xKVqeJJxScqJpUnKm9U/KaKJxX/Sw5rXeSw1kUOa13khw+pTBWTypOKSeWNiicqU8WkMlW8oTJVvKHyROVJxZOKT6hMFU9UpopJ5UnFJw5rXeSw1kUOa13E/uAXqUwVk8pU8YbKv6ziEypPKr5JZar4hMqTim86rHWRw1oXOax1kR++TGWqmFTeUJkq3qj4hMqTiknlmyomlScqTyqeVEwqU8Wk8qTibzqsdZHDWhc5rHUR+4N/iMpUMak8qXhDZap4ojJVPFF5UvGGyjdVTCpTxSdUporfdFjrIoe1LnJY6yL2B/8hlaliUnlSMam8UTGpTBVvqDypeENlqphUnlRMKp+omFSmiknljYpPHNa6yGGtixzWuoj9wS9SmSqeqEwVk8onKiaVqeKJypOKSeVJxSdUPlHxROUTFZPKk4pPHNa6yGGtixzWusgP/ziVqWJSeVLxhsqTiicqb6hMFW9UTCpPKiaVqWKqeKIyVUwqU8VvOqx1kcNaFzmsdZEfPqQyVUwVk8pU8aTijYo3Kt5QmSreqJhUvqliUnlD5Zsq/qbDWhc5rHWRw1oX+eHLVD5RMan8Syomlf+SypOKSeVJxROVqWJSeaPimw5rXeSw1kUOa13kh19W8URlqpgqnqi8ofKkYlKZKt6omFSeqEwVk8pU8ZtU3qiYVJ6oTBWfOKx1kcNaFzmsdZEfPlTxm1Q+oTJVPFF5ovKk4o2KJypTxaTyiYpJ5ZsqJpXfdFjrIoe1LnJY6yI/fEhlqviEylTxhspU8UTljYonKt9U8UbFpDJVPKl4ovJEZap4UvFNh7UucljrIoe1LmJ/8ItU3qiYVN6oeKLypOITKk8qnqg8qXhD5RMVk8qTijdUpopPHNa6yGGtixzWuoj9wQdUpoonKlPFGypTxaQyVTxRmSomlaniDZXfVPFNKlPFGypTxaQyVXzTYa2LHNa6yGGti/zwoYonKp9QeaIyVUwqU8VUMal8QmWqeKLyCZU3KiaVqeKJylQxVfyXDmtd5LDWRQ5rXcT+4ItUpopJ5UnFJ1TeqJhUpopJ5UnFpPJGxaTyiYpJ5Y2KJypvVEwqU8UnDmtd5LDWRQ5rXeSHX6byhsqTikllqnii8k0Vb1RMKpPKf6liUpkqnlRMKpPKbzqsdZHDWhc5rHWRH35ZxaQyVUwqU8Wk8omKSeWNiknlN1U8UZkq3qj4TRWTym86rHWRw1oXOax1EfuDL1J5UvGGylQxqUwVk8pU8YbKf6niX6bypGJSmSq+6bDWRQ5rXeSw1kV++JDKVDGpTCpvVDypmFTeUHlS8URlqphUpoonKpPKGxWTyicqnlT8Sw5rXeSw1kUOa13khw9VfKJiUplUnlS8oTJVTCqTym9S+UTFpDJVTCpvqLxRMan8TYe1LnJY6yKHtS7ywy+reKPiDZWp4g2VqeKJyhOVqeJfUjGpTBVvqLxRMalMFZ84rHWRw1oXOax1kR8+pPI3Vbyh8qTif0nFk4pJZap4Q2Wq+ITKbzqsdZHDWhc5rHWRH76s4ptU3lB5UvFE5Y2KN1SmijdUnlQ8UXmj4hMVf9NhrYsc1rrIYa2L/PDLVN6oeKNiUpkqJpWp4o2KN1SmijdUvqliUplUPqEyVUwqU8U3Hda6yGGtixzWusgP/+NUnqi8UTGpTCpTxSdUnlRMKk9UpoonFZPKk4pJZap4UjGpTBWfOKx1kcNaFzmsdZEf1isVk8pUMVVMKt9UMam8ofJNKlPFk4pvOqx1kcNaFzmsdZEfflnFb6qYVD6hMlV8U8WkMlW8ofJEZaqYKiaVqWJSeUNlqvhNh7UucljrIoe1LvLDl6n8TSpTxROVJxWTypOKSWWqmFSmiicqU8Wk8obKVPFEZaqYVN5QeVLxicNaFzmsdZHDWhexP1jrEoe1LnJY6yKHtS5yWOsih7UucljrIoe1LnJY6yKHtS5yWOsih7UucljrIoe1LnJY6yKHtS7yfzp7v4xbq/1xAAAAAElFTkSuQmCC"
						alt=""
						class="w-[40vw] h-[40vw] m-auto relative z-[1]"
				/>
				<!---->
				<div
						data-v-1247116c=""
						class="text-[3vw] text-[#100A09] text-center mt-[10vw]"
				>
					使用<span data-v-1247116c="" class="text-[#2C6AA1] mx-[1.5vw]"
				>网易云音乐APP</span
				>扫码登录
				</div>
			</div>
			<div data-v-1247116c="" class="fixed bottom-0"></div>
		</div>
	</div>
</template>
<script setup>

</script>
<style>

</style>