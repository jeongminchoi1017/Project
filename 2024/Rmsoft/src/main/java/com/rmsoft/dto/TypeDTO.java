package com.rmsoft.dto;

import lombok.*;


@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TypeDTO {

    private int typeNo;
    private String name;
    private int memberNum;
    private int volume;
    private int fee;

}
