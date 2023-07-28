import Admin from "@/Layouts/Admin";
import React, { useEffect, useState } from "react";
import axios from "axios";
// import { getCsrfToken } from "@/helpers";
import { Contact as iContact } from "@/types";

const Contact = ({ contacts }: { contacts: iContact[] }) => {
    return (
        <Admin>
            <h1 className="text-3xl font-bold mb-3">Contacts</h1>
            <table className="w-full mt-6">
                <thead className="font-bold">
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Message</td>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((project, idx) => {
                        return (
                            <tr key={`project-${idx}`}>
                                <td>{project.id}</td>
                                <td>{project.name}</td>
                                <td>{project.email}</td>
                                <td>{project.message}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Admin>
    );
};

export default Contact;
