async function requestHandler(req, res) {
    try {
        const user = await User.findById(req.userId)
        const tasks = await Tasks.findById(user.taskId)
        tasks.completed = true
        res.send("Tasks Completed")

    } catch (e) {
        e.send(e)
    }
}