package com.rmsoft.service;

import com.rmsoft.dto.SubscribeDTO;
import com.rmsoft.dto.TypeDTO;
import com.rmsoft.mapper.SubscribeMapper;
import com.rmsoft.mapper.TypeMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import java.util.List;

@Log4j2
@Service
@RequiredArgsConstructor
public class TypeService {

    private final TypeMapper mapper;

    // 서비스 type 조회
    public List<TypeDTO> selectTypes(){

        return mapper.selectTypes();
    }
    
    // 서비스 구독 신청
    public void insertSubscribe(SubscribeDTO dto){

        mapper.insertSubscribe(dto);


    }

}
