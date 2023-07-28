import { Head, useForm } from "@inertiajs/react";
import axios, { AxiosError, AxiosResponse } from "axios";
import React, { FormEvent, FormEventHandler, useEffect, useState } from "react";

const Login = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <Head title="Login" />
            <div className="rounded w-full md:w-1/2 lg:w-1/3 xl:w-1/4 bg-white p-5 text-black">
                <h1 className="font-bold text-3xl">Login</h1>
                <form className="mt-3" onSubmit={submit}>
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            className={
                                "w-full rounded border-2 p-1" +
                                (errors.email !== undefined
                                    ? " border-red-500"
                                    : "")
                            }
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                        />
                        {errors.email &&
                            <small className="block text-sm text-red-500">
                                {errors.email}
                            </small>
                        }
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            className={
                                "w-full rounded border-2 p-1" +
                                (errors.password !== undefined
                                    ? " border-red-500"
                                    : "")
                            }
                            value={data.password}
                            onChange={(e) => setData("password", e.target.value)}
                        />
                        {errors.password &&
                            <small className="block text-sm text-red-500">
                                {errors.password}
                            </small>
                        }
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="remember"
                            className="flex items-center gap-2"
                        >
                            <input
                                type="checkbox"
                                id="remember"
                                checked={data.remember}
                                onChange={(e) => setData("remember", e.target.checked)}
                            />{" "}
                            Remember Me?
                        </label>
                    </div>
                    <div>
                        <button className="rounded px-3 py-1 bg-black text-white" disabled={processing}>
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
