import styles from "./TeamList.module.scss"
import React from "react";

interface TeamListProps{
    teamMembersTotal: number
}

const TeamList: React.FC<TeamListProps> = (props: TeamListProps) => {
    const {teamMembersTotal} = props
    return (
        <div>
            <div>

            </div>
            <div>

            </div>
        </div>
    );
};

export default TeamList;
