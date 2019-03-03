const {
    taskOne,
    taskTwo
} = require("./tasks")

async function main() {
    try {
        console.time("Measuring time")
        // const valueOne = await taskOne()
        // const valueTwo = await taskTwo()
        const results = await Promise.all([taskOne(), taskTwo()])
        console.timeEnd("Measuring time")

        // console.log("task one", valueOne)
        // console.log("task two", valueTwo)
        console.log("task one", results[0])
        console.log("task two", results[1])
    } catch (e) {
        console.log(e)
    }
}
main()