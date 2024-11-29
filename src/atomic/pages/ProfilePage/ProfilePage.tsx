import styles from "./ProfilePage.module.scss";
import Header from "../../organisms/Header/Header.tsx";
import ProfileCalendar from "../../organisms/ProfileCalendar/ProfileCalendar.tsx";
import ClosestGames from "../../organisms/ClosestGames/ClosestGames.tsx";
import Achievements from "../../organisms/Achievements/Achievements.tsx";
import Avatar from "../../organisms/Avatar/Avatar.tsx";
import ProfileInfo from "../../organisms/ProfileInfo/ProfileInfo.tsx";
import SkillLevels from "../../organisms/SkillLevels/SkillLevels.tsx";
import SportPreferences from "../../organisms/SportPreferences/SportPreferences.tsx";
import { getUserData, IUserData } from "../../../api/user";
import { useEffect, useState } from "react";

const ProfilePage = () => {
  const [profileData, setProfileData] = useState<null | IUserData>(null);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getUserData();
        setProfileData(response.data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchUserData();
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        <Header />
        <div className={styles.content}>
          <div className={styles.column}>
            <Avatar />
            <ProfileInfo
              name={profileData?.name}
              nickname={profileData?.nickname}
              priorityArea={profileData?.priorityArea}
            />
          </div>
          <div className={styles.column}>
            <Achievements achievements={profileData?.achievements} />
            {profileData && (
              <SportPreferences
                activeSports={profileData?.sportWithLevelList}
              />
            )}
            <SkillLevels activeSports={profileData?.sportWithLevelList} />
          </div>
          <div className={styles.column}>
            <ClosestGames events={profileData?.playgroundEventDtoList} />
            <ProfileCalendar
              specialDates={profileData?.playgroundEventDtoList.map(
                (item) => item.startTime.split("T")[0],
              )}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
