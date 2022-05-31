import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pagination } from '@armonik.admin.gui/armonik-typing';
import { catchError, Observable } from 'rxjs';
import { Session } from '../../entities';
import { ErrorsService } from './errors.service';

@Injectable({
  providedIn: 'root',
})
export class SessionsService {
  private url = 'api/sessions';

  constructor(private http: HttpClient, private errorsService: ErrorsService) {}

  /**
   * Used to get the list of sessions from the api using pagination and filters
   *
   * @param page Page number
   * @param limit Number of items per page
   * @param appName Name of the app
   *
   * @returns Pagination of sessions
   */
  getAllPaginated(
    appName: string,
    page: number = 1,
    limit: number = 10
  ): Observable<Pagination<Session>> {
    const params = new URLSearchParams({
      page: String(page),
      limit: String(limit),
      appName,
    });

    return this.http
      .get<Pagination<Session>>(`${this.url}?${params.toString()}`)
      .pipe(
        catchError(this.errorsService.handleError('getAllPaginated', appName))
      );
  }

  /**
   * Used to get one session by id
   *
   * @param id Id of the session
   *
   * @returns Session
   */
  getOne(id: string): Observable<Session> {
    return this.http
      .get<Session>(`${this.url}/${id}`)
      .pipe(catchError(this.errorsService.handleError('getOne', id)));
  }
}
