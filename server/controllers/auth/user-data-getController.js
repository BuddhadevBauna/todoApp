const user = (req, res) => {
    try {
        const userData = {
            id: req.user.id,
            userName: req.user.userName,
            email: req.user.email
        }
        return res.status(200).json({userData});
    } catch (error) {
        console.error(error);
    }
}

export default user;