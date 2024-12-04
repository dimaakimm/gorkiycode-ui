import styles from "./TeamList.module.scss"
import React from "react";
import person from "../../../assets/person-icon.svg"

interface TeamListProps{
    teamMembersTotal: number[];
    hasList: boolean;
}
function getPlayersCountText(count) {
    const lastDigit = count % 10;
    const lastTwoDigits = count % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
        return `${count} игроков`; // для чисел от 11 до 14 (включительно)
    }

    switch (lastDigit) {
        case 1:
            return `${count} игрок`;
        case 2:
        case 3:
        case 4:
            return `${count} игрока`;
        default:
            return `${count} игроков`;
    }
}

const TeamList: React.FC<TeamListProps> = (props: TeamListProps) => {
    const iconWidth = 45;
    const offsetPerImage = 15;
    const baseOffset = 15
    const {teamMembersTotal, hasList} = props
    const plus = teamMembersTotal.length <= 6 ? teamMembersTotal.length : teamMembersTotal.length-6;

    return (
        <div className={styles.teamList}>
            <div className={styles.teamList__header}>
                <h3 className={styles.teamList__headerTeam}>Команда</h3>
                <p className={styles.teamList__headerCount}>10/12</p>
            </div>
            <div className={styles.teamList__list}>
                <div className={styles.teamList__listIcons}>
                    {hasList && teamMembersTotal.map((el, index) => {
                        const left = (iconWidth*index - offsetPerImage*index) + "px"
                        return (
                            index <6 && <img style={{left}} className={styles.teamList__listIcon} src={person}/>
                        )
                    })}
                </div>
                <div className={styles.teamList__listPlus}>
                    {hasList
                        ? (teamMembersTotal.length > 6 ? "+ " : "") + getPlayersCountText(plus)
                        : "0 игроков"
                    }
                </div>
            </div>
        </div>
    );
};

export default TeamList;
