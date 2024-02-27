import { useState } from 'react';
import axios from 'axios';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        description: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/send-email', formData);
            setFormData({
                name: '',
                email: '',
                description: ''
            });
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };

    return (
        <div className="contact mt-auto">
            <div className="row">
                <h1 className="text-center">Contact me!!</h1>
                <div className="col-6 offset-3 mt-3">
                    <form onSubmit={handleSubmit} className="needs-validation" noValidate encType="multipart/form-data">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <div className="invalid-feedback">
                                Please provide a valid Name!
                            </div>
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email Address:</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <div className="invalid-feedback">
                                Please provide a valid Email Address!
                            </div>
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description:</label>
                            <textarea
                                className="form-control"
                                placeholder="Description"
                                name="description"
                                id="description"
                                value={formData.description}
                                onChange={handleChange}
                                required
                            ></textarea>
                            <div className="invalid-feedback">
                                Please provide a valid Description!
                            </div>
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <button className="btn btn-success" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
