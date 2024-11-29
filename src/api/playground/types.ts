export interface IPlayground {
    id: number,
    longitude: number,
    latitude: number
}

export interface IPlaygroundFull{
    "id": number,
    "town": string,
    "street": string,
    "type": string,
    "longitude": number,
    "latitude": number,
    "playgroundState": number,
    "currentBookState": boolean,
    "downloadURL": string,
    "playgroundStateTimeDtoList": IPlaygroundState[],
}

export interface IPlaygroundState{
    "userCount": number,
    "level": string,
    "startTime": Date
}