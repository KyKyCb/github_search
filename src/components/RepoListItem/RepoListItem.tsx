import React, { FC } from "react";

interface RepoItemInterface {
    repoName: string;
    forksCount: number;
    starsCount: number;

    githubUrl: string;
}
const RepoListItem: FC<RepoItemInterface> = (props) => {
    return (
        <a
            href={props.githubUrl}
            target={"_blank"}
            rel="noreferrer"
            className="list"
        >
            <div className="list__item">
                <div className="list__item__text-container">
                    <p className="list__text__name">{props.repoName}</p>
                </div>

                <div className="list__item__text-container">
                    <div className="list__item_text-row">
                        <span className="list__text">Forks:</span>
                        <span className="list__text">{props.forksCount}</span>
                    </div>
                    <div className="list__item_text-row">
                        <span className="list__text">Stars:</span>
                        <span className="list__text">{props.starsCount}</span>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default RepoListItem;
