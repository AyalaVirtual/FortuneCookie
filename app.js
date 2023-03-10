function fortuneCookie(fortune) {
    const fortune = Math.floor(Math.random() * 13);

    if (fortune <= 3) {
        return "Meetings with others will be very promising this week. Be on the lookout for that special someone.";
    } else if (fortune > 3 && fortune <= 6) {
        return "Now is a great time to schedule job interviews or make presentations. You are likely to make a positive impression on everyone you meet. Romance, kids, and family will all be positively affected.";
    } else if (fortune > 6 && fortune <= 9) {
        return "There could be some rejection from within to 'doing the right thing.' It is important to understand this resistance and to take measures to handle it.";
    } else {
        return "There could be a growing passion building up inside you to go where others have never gone before. Manifest your own destiny to bring change to others.";
    }

}