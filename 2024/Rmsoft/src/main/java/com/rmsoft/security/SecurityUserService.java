package com.rmsoft.security;

import com.rmsoft.dto.UserDTO;
import com.rmsoft.mapper.UserMapper;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Log4j2
@Service
public class SecurityUserService implements UserDetailsService {

	@Autowired
	private UserMapper mapper;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		log.info("username : "+username);
		// 패스워드에 대한 검사는 이전 컴포넌트(AuthenticationProvider)에서 처리되어 사용자 아이디만 넘어옴
		UserDTO user = mapper.selectUser(username);

		// if 문을 사용하여 사용자가 존재하지 않으면 예외를 던지도록 처리
		if (user == null) {
			throw new UsernameNotFoundException(username + " NotFound");
		}

		// 사용자 인증객체 생성(세션에 저장)
		UserDetails userDetails = MyUserDetails.builder()
												.user(user)
												.build();

		log.info("userDetails : " + userDetails);
		return userDetails;
	}

}