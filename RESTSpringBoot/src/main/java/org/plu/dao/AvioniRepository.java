package org.plu.dao;

import org.plu.entities.Avioni;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AvioniRepository extends JpaRepository<Avioni, Long> {
}
