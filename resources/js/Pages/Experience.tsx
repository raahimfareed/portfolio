import Main from "@/Layouts/Main";
import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import Avvvatars from "avvvatars-react";
import { Experience as iExperience } from "@/types";
import { Head } from "@inertiajs/react";

const Experience = ({ experiences }: { experiences: iExperience[] }) => {
    return (
        <Main>
            <Head title="My experience" />
            <section className="px-5 py-32" id="experience">
                <div className="container mx-auto">
                    <div className="mt-12">
                        <h2 className="font-bold text-4xl w-fit flex flex-col">
                            <span>Experience</span>
                            <hr className="w-1/5 border-2 ml-auto" />
                        </h2>
                    </div>
                    <p>This page encapsulates my experience</p>
                    <div className="flex flex-col gap-6 mt-6">
                        <div>
                            {experiences.map((experience, idx) => (
                                <Fragment key={`experience-${idx}`}>
                                    <div className="flex items-center gap-3">
                                        <div className="w-16 h-16 bg-transparent rounded overflow-hidden">
                                            {experience.media === null ? (
                                                <Avvvatars
                                                    value={experience.company}
                                                    radius={1}
                                                    size={64}
                                                />
                                            ) : (
                                                <img
                                                    src={experience.media.path}
                                                    alt={experience.company}
                                                    className="w-full h-full object-contain"
                                                />
                                            )}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-xl">
                                                {experience.title}
                                            </h3>
                                            <p className="text-lg">
                                                {experience.company}
                                            </p>
                                            <p className="text-neutral-400 text-lg">
                                                {moment(
                                                    experience.start
                                                ).format("MMM Y")}{" "}
                                                -{" "}
                                                {experience.end === null
                                                    ? "Present"
                                                    : moment(
                                                          experience.end
                                                      ).format("MMM Y")}
                                            </p>
                                            <p>{experience.description}</p>
                                        </div>
                                    </div>
                                    <hr className="my-6 border-neutral-600" />
                                </Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </Main>
    );
};

export default Experience;
