package com.rmsoft.service;

import com.rmsoft.dto.ListDTO;
import com.rmsoft.dto.SubscribeDTO;
import com.rmsoft.mapper.SubscribeMapper;
import lombok.RequiredArgsConstructor;
import lombok.Value;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import java.util.List;

@Log4j2
@Service
@RequiredArgsConstructor
public class SubscribeService {

    private final SubscribeMapper mapper;

    // 서비스 사용현황 조회
    public ListDTO selectSubscribe(String uid){

        ListDTO subscribe = mapper.selectSubscribe(uid);
        return subscribe;
    }
    // 서비스 기간 종료 시 yn 업데이트
    public void updateSubscribe(String uid){
        mapper.updateSubscribe(uid);
    }

    // 서비스 구독 신청
    public void insertSubscribe(SubscribeDTO dto){
        mapper.insertSubscribe(dto);
    }

    // 서비스 기간 연장
    public void updateEnd(String uid){
        mapper.updateEnd(uid);
    }
}
