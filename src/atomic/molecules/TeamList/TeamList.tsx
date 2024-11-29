import styles from "./TeamList.module.scss"
import React from "react";
import person from "../../../assets/person-icon.svg"

interface TeamListProps{
    teamMembersTotal: number[]
}

const TeamList: React.FC<TeamListProps> = (props: TeamListProps) => {
    const iconWidth = 45;
    const offsetPerImage = 15;
    const baseOffset = 15
    const {teamMembersTotal} = props
    return (
        <div className={styles.teamList}>
            <div className={styles.teamList__header}>
                <h3 className={styles.teamList__headerTeam}>Команда</h3>
                <p className={styles.teamList__headerCount}>10/12</p>
            </div>
            <div className={styles.teamList__list}>
                <div className={styles.teamList__listIcons}>
                    {teamMembersTotal.map((el, index) => {
                        const left = (iconWidth*index - offsetPerImage*index) + "px"
                        return (
                            <img style={{left}} className={styles.teamList__listIcon} src={person}/>
                        )
                    })}
                </div>
                <div className={styles.teamList__listPlus}>
                    + 4 игрока
                </div>
            </div>
        </div>
    );
};

export default TeamList;
