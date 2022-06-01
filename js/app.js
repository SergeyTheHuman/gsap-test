import { isWebp } from './components/isWebp.js'
import { gsap } from 'gsap'

isWebp()

const $animationBtn = document.querySelector('.btnAnim')

$animationBtn.addEventListener('click', (e) => {
	gsap.to('.red', { duration: 1.5, repeat: -1, yoyo: true, ease: 'back.out(1.7)', x: 300 })
	gsap.to('.blue', { duration: 2, repeat: -1, yoyo: true, ease: 'elastic.out(1, 0.3)', x: -300 })
	gsap.to('.green', {
		duration: 2,
		repeat: -1,
		yoyo: true,
		ease: 'rough({ template: none.out, strength: 1, points: 20, taper: none, randomize: true, clamp: false })',
		x: 300,
	})
	gsap.to('.yellow', {
		duration: 2,
		repeat: -1,
		yoyo: true,
		ease: 'bounce.out',
		x: -300,
		onStart: console.log,
		onStartParams: ['МУЖИКИ, Я ПОЕХАЛ, УУУУУ'],
	})

	gsap.fromTo(
		'.small-block',
		{
			scale: 0.1,
			duration: 1.5,
			ease: 'power1.inOut',
			delay: 1,
			repeat: -1,
			yoyo: true,
			stagger: {
				amount: 1.5,
			},
		},
		{
			scale: 1,
			delay: 1,
			repeat: -1,
			yoyo: true,
			stagger: {
				amount: 1.5,
			},
		}
	)
	let coolAnimation = gsap.timeline({ repeat: 30, repeatDelay: 1 })
	coolAnimation
		.to('.text-block', { duration: 1, x: 150, y: 75 })
		.to('.text-block', { duration: 0.5, scale: 0.2, y: -100 })
		.to('.text-block', { duration: 1.2, scale: 1, rotation: 360, x: -500 })
		.to('.text-block', { duration: 0.7, x: 0, scale: 2 })
		.to('.text-block', { duration: 0.2, scale: 0.25 })
		.to('.text-block', { duration: 0.2, scale: 1.5 })
		.to('.text-block', { duration: 0.2, scale: 0.25 })
		.to('.text-block', { duration: 0.2, scale: 1.5 })
		.to('.text-block', { duration: 0.5, x: 5000 })
		.to('.text-block', {
			duration: 0.5,
			delay: 1.5,
			x: 0,
			y: 0,
			scale: 1,
		})
})
