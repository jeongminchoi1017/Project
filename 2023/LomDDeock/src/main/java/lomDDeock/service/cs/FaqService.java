package lomDDeock.service.cs;

import jakarta.transaction.Transactional;
import lomDDeock.dto.cs.CsDTO;
import lomDDeock.dto.cs.CsPageRequestDTO;
import lomDDeock.dto.cs.CsPageResponseDTO;
import lomDDeock.entity.cs.CsEntity;
import lomDDeock.mapper.cs.CsMapper;
import lomDDeock.repository.cs.CsRepository;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Log4j2
@Service
public class FaqService {

    @Autowired
    private CsMapper csMapper;

    @Autowired
    private CsRepository csRepository;

    @Transactional
    public void insertCs(CsDTO dto){
        dto.setGroup("faq");

        CsEntity csEntity = dto.toEntity();
        csRepository.save(csEntity);
    }

    public CsPageResponseDTO selectCsBoards(String cate, CsPageRequestDTO csPageRequestDTO){
        int start = (csPageRequestDTO.getPg() - 1) * csPageRequestDTO.getSize();
        List<CsDTO> csDTO = csMapper.selectCss(cate, start);
        int total = csMapper.selectCountCs(cate);

        return CsPageResponseDTO.builder()
                .csPageRequestDTO(csPageRequestDTO)
                .csList(csDTO)
                .total(total)
                .build();
    }

    public CsDTO selectCsBoard(int cno){
        Optional<CsEntity> csEntity = csRepository.findById(cno);
        CsDTO dto = csEntity.get().toDTO();

        return dto;
    }

    public void updateCs(CsDTO csDTO) {
        CsEntity csEntity = csDTO.toEntity();
        csRepository.save(csEntity);
    }

    public void hideCs(int cno){
        csRepository.hideCs(cno);
    }
    public void deleteCs(int cno){
        csRepository.deleteById(cno);
    }
}
