export const logout = (req, res) => {
    res.clearCookie("token").send({
        success: true,
        message: "User logged out successfully"
    });
}
