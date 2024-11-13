function hebrewDayOffset()
{
	doit_man();
	setmazal_man();
	
	//Man is leading
	if((hebrewday > hebrewday_man) || (hebrewday == 1 && hebrewday_man == 7))
		return -1;
	
	return 0;
}