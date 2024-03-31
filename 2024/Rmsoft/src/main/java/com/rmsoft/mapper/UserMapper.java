package com.rmsoft.mapper;

import com.rmsoft.dto.UserDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface UserMapper {
	
	public int insertUser(UserDTO dto);
	public UserDTO selectUser(String uid);
	public List<UserDTO> selectUsers();
	public int updateUser(UserDTO dto);
	public int deleteUser(String uid);

	public int countUid(String uid);
	public int countNick(String nick);
	public int countEmail(String email);
	public int countHp(String hp);
}
