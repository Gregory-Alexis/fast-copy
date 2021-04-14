const fsPromises = require("fs/promises")

const dossier = "./TestFile"

const directory = async () => {
	try {
		let first = await fsPromises.readdir(dossier)

		for (let i = 0; i < first.length; i++) {
			fsPromises.writeFile("./TestDir/" + first[i], first[i])
		}
	} catch (e) {
		console.error(e.message)
	}
}

directory()
