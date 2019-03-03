function requestHandler(req, res) {
    User.findById(res.userId)
        .then(function (user) {
            return Tasks.findById(user.TasksId)
        })
        .then(function (tasks) {
            tasks.completed = true
            tasks.save()
        })
        .then(function () {
            res.send("Tasks complete")
        })
        .catch(function (errs) {
            res.send(errs)
        })
}