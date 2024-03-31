package com.rmsoft.mapper;

import com.rmsoft.dto.SubscribeDTO;
import com.rmsoft.dto.TypeDTO;
import com.rmsoft.dto.UserDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface TypeMapper {

	public void insertSubscribe(SubscribeDTO dto);
	public UserDTO selectUser(String uid);
	public List<TypeDTO> selectTypes();
	public int updateUser(UserDTO dto);
	public int deleteUser(String uid);
}
