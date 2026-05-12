import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

export default function RegisterForm() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        fullName: "",
        email: ""
    });

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("http://localhost:8080/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const message = await res.text();

            if (res.ok) {
                alert("✅ " + message);
                setFormData({ username: "", password: "", fullName: "", email: "" });
            } else {
                alert("❌ " + message);
            }
        } catch (error) {
            alert("⚠️ เกิดข้อผิดพลาดในการเชื่อมต่อ");
        }
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                maxWidth: 400,
                margin: "auto",
                mt: 5,
                p: 3,
                boxShadow: 3,
                borderRadius: 2,
                bgcolor: "background.paper",
            }}
        >
            <Typography variant="h4" align="center" gutterBottom>
                Register
            </Typography>

            <TextField
                label="Username"
                name="username"
                fullWidth
                margin="normal"
                value={formData.username}
                onChange={handleChange}
                required
            />
            <TextField
                label="Password"
                name="password"
                type="password"
                fullWidth
                margin="normal"
                value={formData.password}
                onChange={handleChange}
                required
            />
            <TextField
                label="Full Name"
                name="fullName"
                fullWidth
                margin="normal"
                value={formData.fullName}
                onChange={handleChange}
                required
            />
            <TextField
                label="Email"
                name="email"
                type="email"
                fullWidth
                margin="normal"
                value={formData.email}
                onChange={handleChange}
                required
            />

            <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
                Register
            </Button>
        </Box>
    );
}
