export const data = [
    {
        predict: 8,
        now: 2,
    },{
        predict: 10,
        now: 5,
    },{
        predict: 12,
        now: 5,
    },{
        predict: 15,
        now: 8,
    },{
        predict: 15,
        now: 2,
    },{
        predict: 12,
        now: 2,
    },{
        predict: 18,
        now: 2,
    },{
        predict: 20,
        now: 2,
    },{
        predict: 8,
        now: 2,
    },{
        predict: 10,
        now: 5,
    },{
        predict: 12,
        now: 5,
    },{
        predict: 15,
        now: 8,
    },{
        predict: 15,
        now: 2,
    },{
        predict: 12,
        now: 2,
    },{
        predict: 18,
        now: 2,
    },{
        predict: 20,
        now: 2,
    },{
        predict: 8,
        now: 2,
    },{
        predict: 10,
        now: 5,
    },{
        predict: 12,
        now: 5,
    },{
        predict: 15,
        now: 8,
    },{
        predict: 15,
        now: 2,
    },{
        predict: 12,
        now: 2,
    },{
        predict: 18,
        now: 2,
    },{
        predict: 20,
        now: 2,
    },]

export function passedHours(time: Date){
    const now = new Date();
    const startOfDay = new Date(now.setHours(0, 0, 0, 0));
    const differenceInMs = time.getTime() - startOfDay.getTime();
    const hoursPassed = differenceInMs / (1000 * 60 * 60);
    return Math.floor(hoursPassed);
}