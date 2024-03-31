package lomDDeock.dto.util;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;


public class Pager {
    public Pager(){

    }
    // 현재 페이지 번호
    public int getCurrentPage(int pg) {
        int currentPage = 1;

        if(pg != 0){
            currentPage =pg;
        }

        return currentPage;
    }


    // 페이지 마지막 번호
    public int getLastPageNum(int total, int size) {

        int lastPageNum = 0;

        if (total % size == 0) {
            return (int) (Math.ceil(total / (double) size));
        } else {
            return total / size + 1;
        }

    }

    // 페이지 그룹
    public int[] getPageGroupNum(int currentPage, int lastPageNum) {
        int currentPageGroup = (int)Math.ceil(currentPage / 10.0);
        int pageGroupStart = (currentPageGroup - 1) * 10 + 1;
        int pageGroupEnd = currentPageGroup * 10;

        if(pageGroupEnd > lastPageNum){
            pageGroupEnd = lastPageNum;
        }

        int[] result = {pageGroupStart, pageGroupEnd};

        return result;
    }

    // 페이지 시작번호
    public int getPageStartNum(int total, int currentPage, int size) {
        int start = (currentPage - 1) * size;
        return total - start;
    }

    // Limit 시작번호
    public int getStartNum(int currentPage, int size) {
        return (currentPage - 1) * size;
    }
}
