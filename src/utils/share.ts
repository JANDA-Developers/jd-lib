export type Tshare = {
    title: string,
    text: string,
    url: string,
}


export const share = async (shareProp: Tshare) => {
    if (typeof navigator.share === "undefined") {
        return;
    }
    try {
        await navigator.share(shareProp);
        console.log("공유 성공");
    } catch (e) {
        console.error("공유 실패");
    }
}
