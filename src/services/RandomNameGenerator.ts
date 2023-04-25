

// Return a random name like 'Invisible-Rooster-42'
export const randomUserName = () => {
    const randomAttribute: string[] = [ "Floating", "Invisible", "Firing", "Immortal", "Alive", "Strong", "Healing", "Spiritual", "Accurate", "Morphing", "Quick", "Celestial" ]
    const randomName: string[]      = [ "Rooster", "Snake", "Dragon", "Dog", "Rat", "Bullock", "Horse", "Tiger", "Pig", "Monkey", "Rabbit", "Sheep" ]
    const randomNumber: number      = Math.floor(Math.random() * 99)

	const userName: string = 
        randomAttribute[Math.floor(Math.random()*randomAttribute.length)] + '-' +
        randomName[Math.floor(Math.random()*randomName.length)] + '-' +
        randomNumber.toString();

	return userName;
}
