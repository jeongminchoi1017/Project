package com.rmsoft.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ListDTO {

    private int no;
    private String subscriber;
    private int type;
    private int usedVolume;
    private String company;
    private String hp;
    private String email;
    private int zip;
    private String addr1;
    private String addr2;
    private LocalDateTime regDate;
    private LocalDateTime endDate;
    private int yn;
    private int typeNo;
    private String name;
    private int memberNum;
    private int volume;
    private int fee;

}