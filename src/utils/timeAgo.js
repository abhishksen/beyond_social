export const timeAgo = (timestamp) => {
    // write a function to convert timestamp to time ago
    // 1. get current time
    const currentTime = new Date().getTime();
    // 2. get the time of the post
    const postTime = timestamp;
    // 3. subtract post time from current time
    const timeDifference = currentTime - postTime;
    // 4. convert time difference to time ago
    const seconds = timeDifference / 1000;
    const minutes = seconds / 60;
    const hours = minutes / 60;
    const days = hours / 24;
    const weeks = days / 7;
    const months = weeks / 4;
    const years = months / 12;
    if (seconds < 60) {
        return `${Math.floor(seconds)}s ago`
    } else if (minutes < 60) {
        return `${Math.floor(minutes)}m ago`
    } else if (hours < 24) {
        return `${Math.floor(hours)}h ago`
    } else if (days < 7) {
        return `${Math.floor(days)}d ago`
    } else if (weeks < 4) {
        return `${Math.floor(weeks)}w ago`
    } else if (months < 12) {
        return `${Math.floor(months)}mo ago`
    } else {
        return `${Math.floor(years)}y ago`
    }
}