package com.rmsoft.service;

import com.rmsoft.dto.UserDTO;
import com.rmsoft.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserMapper mapper;
    @Autowired
    private PasswordEncoder passwordEncoder;

    public void insertUser(UserDTO dto){
        // 비밀번호 암호화

        dto.setPass(passwordEncoder.encode(dto.getPass()));

        mapper.insertUser(dto);

    }

    public int countUid(String uid){
        return mapper.countUid(uid);
    }
    public int countNick(String nick){
        return mapper.countNick(nick);
    }
    public int countEmail(String email){
        return mapper.countEmail(email);
    }
    public int countHp(String hp){
        return mapper.countHp(hp);
    }
}